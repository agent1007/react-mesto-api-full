import PopupWithForm from './PopupWithForm';
import {  useRef } from 'react';


function EditAvatarPopup(props) {
  

  const avatarRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateAvatar({
      avatar: avatarRef.current.value

    });
  } 

    return (
        <PopupWithForm 
            name='avatar' 
            title='Обновить аватар'
            isOpen={props.isOpen}
            onClose={props.onClose}
            onSubmit={handleSubmit} >
            <>
              <input 
                type="url" 
                required 
                className="popup__info popup__info_subtitle popup__info_subtitle-add-card" 
                placeholder="Ссылка на аватар" 
                name="link" 
                id="info-subtitle-avatar" 
                ref={avatarRef}
              />
              <span 
                id="info-subtitle-avatar-error" 
                className="error" 
              />  
              <button 
                type="submit" 
                className="popup__submit-button popup__submit-button_add-card">Сохранить
              </button>
            </>
          </PopupWithForm>
    )
}

export default EditAvatarPopup;