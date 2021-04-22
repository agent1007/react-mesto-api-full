function PopupWithForm(props) {
  return (
      <>
        <div className={`popup popup_type_${props.name} ${props.isOpen ? 'popup_opened' : ''} `}> 
          <div className="popup__container">
            <h2 className="popup__title">{props.title}</h2>
            <form className={`popup__form popup__form_type_${props.name}`} name="form-popup" onSubmit={props.onSubmit}>
              {props.children}   
            </form>
            <button type="button" className="popup__close-button" onClick={props.onClose}/>
          </div>
        </div>
      </>
  );
}
  
export default PopupWithForm;