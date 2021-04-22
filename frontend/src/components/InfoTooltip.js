import InfoTooltipOk from '../images/InfoTooltipOk.svg';
import InfoTooltipFault from '../images/InfoTooltipFault.svg';

function InfoTooltip(props) {
    return (
        <div className={`popup  ${props.isOpen ? 'popup_opened' : ''} `}> 
            <div className="popup__container popup__container-info-tooltip">
                <img className="popup__image popup__image-info-tooltip" src={props.success ? InfoTooltipOk : InfoTooltipFault} 
                alt='Картинка'/>
                <h2 className="popup__title popup__title-image-info-tooltip">
                    {props.success ? 'Вы успешно зарегистрировались!' : 'Что-то пошло не так! Попробуйте ещё раз.'}</h2>
                <button type="button" className="popup__close-button" onClick={props.onClose}/>
            </div>
        </div>
    );
  }
    
  export default InfoTooltip;