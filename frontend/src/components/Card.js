import { useContext} from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';


function Card(props) {

  const currentUser = useContext(CurrentUserContext);
  const isOwn = props.owner === currentUser._id;
  const cardDeleteButtonClassName = (
    `element__delete-button ${isOwn ? 'element__delete-button' : 'element__delete-button_hidden'}`
  ); 
  const isLiked = props.likes.some(i => i === currentUser._id);
  const cardLikeButtonClassName = (
    `element__button ${isLiked ? 'element__button_active' : ''}`
  );; 
  function handleLikeClick() {
    props.onCardLike({
      likes: props.likes,
      _id: props._id
    })
  }
  function handleDeleteCardClick() {
    props.onCardDelete({
      _id: props._id
    })
  }
  function handleClick() {
    props.onCardClick({
      name: props.name,
      src: props.link
    })
  }

    return (
        <div className="element">
            <img className="element__image" src={props.link} alt={props.name} onClick={handleClick}/>
            <div className="element__row">
              <h2 className="element__title" >{props.name}</h2>
              <div className="element__buttons">
                <button type="button" className={cardLikeButtonClassName} onClick={handleLikeClick}/>
                <div className="element__like-numbers" >{props.likes.length}</div>
              </div>
            </div>
            <button type="button" className={cardDeleteButtonClassName} onClick={handleDeleteCardClick}/>
          </div>
    )
}

export default Card;