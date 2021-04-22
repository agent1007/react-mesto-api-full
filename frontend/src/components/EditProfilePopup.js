import PopupWithForm from './PopupWithForm';
import { useState, useEffect, useContext } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function EditProfilePopup(props) {
  const currentUser = useContext(CurrentUserContext);

  

  const [name, setName ] = useState(currentUser.name);
  const [description, setDescription] = useState(currentUser.about);

  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeDescription(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateUser({
      name,
      about: description,
    });
  } 

    return (
        <PopupWithForm 
            name={'edit'} 
            title={'Редактировать профиль'} 
            isOpen={props.isOpen}
            onClose={props.onClose} 
            onSubmit={handleSubmit}>
            <>
              <input 
                type="text" 
                name='name'
                className="popup__info popup__info_title popup__input" 
                id="name-input"
                value={name || ''}
                onChange={handleChangeName} 
                // defaultValue='111'
                required minLength={2} maxLength={40} placeholder="Имя" 
              />
              <span 
                id="name-input-error" 
                className="error" 
              />
              <input 
                type="text" 
                name='about'
                className="popup__info popup__info_subtitle popup__input" 
                id="title-input" 
                value={description || ''}
                onChange={handleChangeDescription}
                required minLength={2} maxLength={200} placeholder="Проффесия" 
                // defaultValue='222'
              />
              <span 
                id="title-input-error" 
                className="error" 
              />    
              <button 
                type="submit" 
                className="popup__submit-button"
                >Сохранить
              </button>
            </>
        </PopupWithForm>
    )
}
          
export default EditProfilePopup;