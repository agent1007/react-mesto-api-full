import PopupWithForm from './PopupWithForm';

function EditConfirmPopup() {
    return (
        <PopupWithForm 
            name='confirm' 
            title='Вы уверены?' >
            <>
              <button 
                type="submit" 
                className="popup__submit-button">Да
              </button>
            </>
          </PopupWithForm>
    )
}

export default EditConfirmPopup;