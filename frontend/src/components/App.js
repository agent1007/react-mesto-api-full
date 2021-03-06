import { useState, useEffect, useCallback } from 'react';
import Header from './Header';
import Main from './Main';
import Login from './Login';
import Register from './Register';
import Footer from './Footer';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import EditConfirmPopup from './EditConfirmPopup';
import ImagePopup from './ImagePopup';
import InfoTooltip from './InfoTooltip';
import api from '../utils/api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import { Redirect, Route, Switch, useHistory } from 'react-router-dom';
import ProtectedRoute from "./ProtectedRoute";
import * as auth from '../utils/auth';

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isInfoTooltip, setIsInfoTooltip] = useState(false);
  const [selectedCard, setSelectedCard] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);

  function handleEditProfileClick () {
    setIsEditProfilePopupOpen(true);
  }
  function handleAddPlaceClick () {
    setIsAddPlacePopupOpen(true);
  }
  function handleEditAvatarClick () {
    setIsEditAvatarPopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard(false);
    setIsInfoTooltip(false)
  }
  function handleCardClick (card) {
    setSelectedCard(card);
  }
 function handleUpdateUser(data) {
  api.editProfile(data)
    .then(data => {
      setCurrentUser(data);
      closeAllPopups()
    }
    )
    .catch(err => console.log(err))
  } 
  function handleUpdateAvatar(data) {
    api.changeUserAvatar(data)
      .then(data => {
        setCurrentUser(data);
        closeAllPopups()
      }
      )
      .catch(err => console.log(err))
    } 
    function handleAddPlaceSubmit(data) {
      api.addCard(data)
        .then(newCard => {
          setCards([newCard, ...cards]);;
          closeAllPopups()
        }
        )
        .catch(err => console.log(err))
    } 
    function handleCardLike(card) {
      const isLiked = card.likes.some(i => i === currentUser._id);
      const likeRequest = !isLiked ? api.addCardLike(card._id) : api.deleteCardLike(card._id);
      likeRequest
        .then((newCard) => {
          const newCards = cards.map((c) => c._id === card._id ? newCard : c);
          setCards(newCards);
        })
        .catch(err => console.log(err))
    } 
    function handleCardDelete(card) {
      api.removeCard(card._id) 
        .then(() => {
          const newCards = cards.filter((data) => {return card._id !== data._id} );
          setCards(newCards);
        })
        .catch(err => console.log(err))
    } 

    const initialData = {
      email: '',
      password: ''
    }
    const [loggedIn, setLoggedIn] = useState(false);
    const [data, setData] = useState(initialData)
    const [success, setSuccess] = useState(false)
    const history = useHistory();

    const tokenCheck = useCallback (() => {
      const jwt = localStorage.getItem('jwt');
      if (jwt) {
        api.getUserData(jwt)
        .then((res) => {
          if(res) {
            setData({
              email: res.email,
            })
            setLoggedIn(true);
            history.push('/')
          }
        })
        .catch((res) => {
          history.push('/signin')})
      }

    }, [history])

    useEffect(() => {
      tokenCheck();
    }, [tokenCheck])

    const handleRegister = ({email, password}) => {
      return auth.register(email, password)
      .then((res) => {
        setSuccess(true);
        setIsInfoTooltip(true);
        history.push('/signin');
        return res;
      })
      .catch(err => {
        setIsInfoTooltip(true);
        history.push('/signup');
        setSuccess(false);})
    }

    const handleLogin = ({ email, password }) => {
      return auth.login(email, password).then(res => {
        if (!res || res.statusCode === 400) throw new Error('??????-???? ?????????? ???? ??????');
        if (res.token) {
          setData({email})
          localStorage.setItem('jwt', res.token);
          setLoggedIn(true);
        };
      });
      
    }

    const handleSignOut = () => {
      localStorage.removeItem('jwt');
      setData(initialData);
      setLoggedIn(false);
      history.push('/signin');
    }

    useEffect( () => {
      if(loggedIn) {
        api.getUserData()
        .then(data => {
          setCurrentUser(data);
        })
      .catch(err => console.log(err))  
      }
    },[loggedIn])

    useEffect( () => {
      if(loggedIn) {
        api.getInitialCards()
        .then(res => {
          setCards(res)
        })
        .catch(err => console.log(err))
      }
    }, [loggedIn])

    // useEffect(() => {
    //   if(loggedIn) {
    //     api.getUserData()
    //     .then((res) => {
    //       setCurrentUser(res)
    //     })
    //     .catch((err) => {
    //       console.log(err)
    //     })
    //   }
    // }, [loggedIn])
  return (
    
    <div className="App">
      <CurrentUserContext.Provider value={currentUser}>
      <div className="body">
      
        <div className="page">
          <Header onSignOut={handleSignOut} email={data.email} /> 
          <Switch>
          <ProtectedRoute 
            path="/" 
            exact 
            loggedIn={loggedIn}
             
            component={Main} 
            onEditAvatar={handleEditAvatarClick}
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onCardClick={handleCardClick}
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete}
            cards={cards}/>

          <Route path="/signin">
            <Login onLogin={handleLogin} tokenCheck={tokenCheck}/>
          </Route>

          <Route path="/signup">
            <Register onRegister={handleRegister}  /> 
          </Route>

          <Route>
            {loggedIn ? <Redirect to='/' /> : <Redirect to='/signin' />}
          </Route>

          </Switch>
          <Footer />
          <EditProfilePopup 
            isOpen={isEditProfilePopupOpen} 
            onClose={closeAllPopups} 
            onUpdateUser={handleUpdateUser} />
          <EditAvatarPopup 
            isOpen={isEditAvatarPopupOpen} 
            onClose={closeAllPopups}
            onUpdateAvatar={handleUpdateAvatar} />
          <AddPlacePopup 
            isOpen={isAddPlacePopupOpen} 
            onClose={closeAllPopups} 
            onAddPlace={handleAddPlaceSubmit}  />
          <EditConfirmPopup />
          
          <ImagePopup 
            card={selectedCard}
            onClose={closeAllPopups}
          />
          <InfoTooltip 
            isOpen={isInfoTooltip} 
            onClose={closeAllPopups}
            success={success}
             />

        </div>
        
      </div>  
      </CurrentUserContext.Provider>
    </div>
    
  );
}

export default App;
