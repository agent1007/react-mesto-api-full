const { celebrate, Joi } = require('celebrate');
const { ObjectId } = require('mongoose').Types;
const validator = require('validator');

module.exports.validateGetUsers = celebrate({
  headers: Joi.object().keys({
    authorization: Joi.string().min(2).max(200),
  }).unknown(true),
});

module.exports.validateGetUserById = celebrate({
  params: Joi.object().keys({
    userId: Joi.string().required().custom((value, helpers) => {
      if (ObjectId.isValid(value)) {
        return value;
      }
      return helpers.message('Невалидный id пользователя');
    }),
  }),
  headers: Joi.object().keys({
    authorization: Joi.string().min(2).max(200),
  }).unknown(true),
});

module.exports.validateGetCurrentUser = celebrate({
  headers: Joi.object().keys({
    authorization: Joi.string().min(2).max(200),
  }).unknown(true),
});

module.exports.validateLogin = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().custom((value, helpers) => {
      if (validator.isEmail(value)) {
        return value;
      }
      return helpers.message('Поле "email" должно быть валидным email-адресом');
    })
      .messages({
        'any.required': 'Поле "email" должно быть заполнено',
      }),
    password: Joi.string().required().messages({
      'string.min': 'Минимальная длина пароля составляет 8 символов.',
      'any.required': 'Пароль должен быть заполнен.',
    }),
  }),
});

module.exports.validateRegistration = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().custom((value, helpers) => {
      if (validator.isEmail(value)) {
        return value;
      }
      return helpers.message('Поле "email" должно быть валидным email-адресом');
    })
      .messages({
        'any.required': 'Поле "email" должно быть заполнено',
      }),
    password: Joi.string().required().messages({
      'string.min': 'Минимальная длина пароля составляет 8 символов.',
      'any.required': 'Пароль должен быть заполнен.',
    }),
    name: Joi.string().min(2).max(30)
      .messages({
        'string.min': 'Минимальная длина поля "name" - 2',
        'string.max': 'Максимальная длина поля "name" - 30',
        'any.required': 'Поле "name" должно быть заполнено',
      }),
    about: Joi.string().min(2).max(30)
      .messages({
        'string.min': 'Минимальная длина поля "name" - 2',
        'string.max': 'Максимальная длина поля "name" - 30',
        'any.required': 'Поле "about" должно быть заполнено',
      }),
    avatar: Joi.string().custom((value, helpers) => {
      if (validator.isURL(value)) {
        return value;
      }
      return helpers.message('Поле "avatar" должно быть валидным url-адресом');
    })
      .messages({
        'any.required': 'Поле "avatar" должно быть заполнено',
      }),
  }),
});

module.exports.validateUpdateUserAvatar = celebrate({
  body: Joi.object().keys({
    avatar: Joi.string().custom((value, helpers) => {
      if (validator.isURL(value)) {
        return value;
      }
      return helpers.message('Поле "avatar" должно быть валидным url-адресом');
    })
      .messages({
        'any.required': 'Поле "avatar" должно быть заполнено',
      }),
  }),
});

module.exports.validateUpdateUser = celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30).required()
      .messages({
        'string.min': 'Минимальная длина поля "name" - 2',
        'string.max': 'Максимальная длина поля "name" - 30',
        'any.required': 'Поле "name" должно быть заполнено',
      }),
    about: Joi.string().min(2).max(30).required()
      .messages({
        'string.min': 'Минимальная длина поля "name" - 2',
        'string.max': 'Максимальная длина поля "name" - 30',
        'any.required': 'Поле "about" должно быть заполнено',
      }),
  }),
});

module.exports.validateGetCards = celebrate({
  headers: Joi.object().keys({
    authorization: Joi.string().min(2).max(200),
  }).unknown(true),
});

module.exports.validateCreateCard = celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30).required()
      .messages({
        'string.min': 'Минимальная длина поля "name" - 2',
        'string.max': 'Максимальная длина поля "name" - 30',
        'any.required': 'Поле "name" должно быть заполнено',
      }),
    link: Joi.string().required().custom((value, helpers) => {
      if (validator.isURL(value)) {
        return value;
      }
      return helpers.message('Поле "link" должно быть валидным url-адресом');
    })
      .messages({
        'any.required': 'Поле "link" должно быть заполнено',
      }),
  }),
});

module.exports.validateDeleteCard = celebrate({
  params: Joi.object().keys({
    cardId: Joi.string().required().custom((value, helpers) => {
      if (ObjectId.isValid(value)) {
        return value;
      }
      return helpers.message('Невалидный id пользователя');
    }),
  }),
  headers: Joi.object().keys({
    authorization: Joi.string().min(2).max(200),
  }).unknown(true),
});
