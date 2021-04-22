import PopupWithForm from './PopupWithForm';
import { useRef } from 'react';

function AddPlacePopup(props) {

  const nameRef = useRef();
  const linkRef = useRef();
  
  function handleSubmit(e) {
    e.preventDefault();
    props.onAddPlace({
      
      name: nameRef.current.value,
      link: linkRef.current.value
    });
    nameRef.current.value = '';
    linkRef.current.value = '';
  } 



    return (
        <PopupWithForm 
            name='add-card' 
            title='Новое место' 
            isOpen={props.isOpen}
            onClose={props.onClose} 
            onSubmit={handleSubmit}  >
            <> 
              <input 
                type="text" 
                required 
                minLength={2} 
                maxLength={30} 
                className="popup__info popup__info_title popup__info_title-add-card" 
                placeholder="Название" 
                name="name" 
                id="info-title-add-card" 
                ref={nameRef}
                
              />
              <span 
                id="info-title-add-card-error" 
                className="error" 
              />  
              <input 
                type="url" 
                required 
                className="popup__info popup__info_subtitle popup__info_subtitle-add-card" 
                placeholder="Ссылка на картинку" 
                name="link" 
                id="info-subtitle-add-card" 
                ref={linkRef}
                
              />
              <span 
                id="info-subtitle-add-card-error" 
                className="error" 
              />  
              <button 
                type="submit" 
                className="popup__submit-button popup__submit-button_add-card">Создать
              </button>
            </>
          </PopupWithForm>
    )
}

export default AddPlacePopup;