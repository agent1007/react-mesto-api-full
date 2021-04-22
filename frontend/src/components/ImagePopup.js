function ImagePopup(props) {
    return (
        <div className={`popup popup_type_image ${props.card ? 'popup_opened' : ''} `}>
            <div className="popup__container-image">
                <img className="popup__image" src={props.card ? props.card.src : '#'} alt={props.card ? props.card.name : '#'} />
                <button type="button" className="popup__close-button popup__close-button-image" onClick={props.onClose}/>
                <h2 className="popup__image-caption">{props.card ? props.card.name : '#'}</h2>
            </div>
        </div>
    );
}
    
export default ImagePopup;