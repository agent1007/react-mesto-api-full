export const popup = document.querySelector('.popup');
export const elements = document.querySelector('.elements');
export const editButton = document.querySelector('.profile__edit-button');
export const popupTypeEdit = document.querySelector('.popup_type_edit');
export const profileInfoTitle = document.querySelector('.profile__info-title');
export const profileInfoSubtitle = document.querySelector('.profile__info-subtitle');
export const profileAvatar = document.querySelector('.profile__avatar');
export const infoTitle = document.querySelector('.popup__info_title');
export const infoSubtitle = document.querySelector('.popup__info_subtitle');
export const addButton = document.querySelector('.profile__add-button');
export const popupTypeAddCard = document.querySelector('.popup_type_add-card');
export const popupTypeImage = document.querySelector('.popup_type_image');
export const popupConfirm = document.querySelector('.popup_confirm');
export const popupFormTypeEdit = document.querySelector('.popup__form_type_edit');
export const popupFormTypeAddCard = document.querySelector('.popup__form_type_add-card');
export const popupFormAvatar = document.querySelector('.popup__form-avatar');
export const popupAvatar = document.querySelector('.popup_avatar');
export const validationConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__info',
    submitButtonSelector:  '.popup__submit-button',
    inputInvalidClass: 'popup__info_state_invalid',
    buttonInvalidClass: 'popup__submit-button_invalid'  
}

// массив начальных карточек
export const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
]; 

export const popupInfoTitle = document.querySelector('.popup__info_title');
export const popupInfoSubtitle = document.querySelector('.popup__info_subtitle');



export const deleteButton = document.querySelector('.element__delete-button');


export const popupSubmitButton = document.querySelector('.popup__submit-button');

// const popupFormEdit = document.querySelector('div.popup_type_edit .popup__form');

// const popupForm = document.querySelector('.popup__form_type_add-card');
// const closeButtonEdit = document.querySelector('div.popup_type_edit .popup__close-button');
// const closeButtonAddCard = document.querySelector('div.popup_type_add-card .popup__close-button');
// const closeButtonImage = document.querySelector('div.popup_type_image .popup__close-button-image');