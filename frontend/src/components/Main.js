import { useContext} from 'react';
import Card from './Card';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Main(props) {

  const currentUser = useContext(CurrentUserContext);

    return (
        <main className="content">
        <section className="profile">
          <div className="profile__columns">
            <img className="profile__avatar" src={currentUser.avatar} alt="Рисунок" onClick={props.onEditAvatar}/>
            <div className="profile__info">
              <h1 className="profile__info-title">{currentUser.name}</h1>
              <button type="button" className="profile__edit-button" onClick={props.onEditProfile} />
              <p className="profile__info-subtitle">{currentUser.about}</p>
            </div>
          </div>
          <button type="button" className="profile__add-button" onClick={props.onAddPlace} />         
        </section>
        <section className="elements">
          {props.cards.map(item => {return (<Card 
                                        key={item._id}   
                                        {...item} 
                                        onCardClick={props.onCardClick} 
                                        onCardLike={props.onCardLike}
                                        onCardDelete={props.onCardDelete}
                                      />)})}
        </section>
      </main>
    );
}
  
export default Main;