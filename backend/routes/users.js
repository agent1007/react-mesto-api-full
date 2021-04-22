const router = require('express').Router();
const express = require('express');

const app = express();

const {
  getUsers, getUserById, createUser, updateUser, updateAvatar, login, getCurrentUser,
} = require('../controllers/users');
const auth = require('../middlewares/auth');

const {
  validateGetUsers,
  validateGetUserById,
  validateLogin,
  validateRegistration,
  validateUpdateUserAvatar,
  validateUpdateUser,
  validateGetCurrentUser,
} = require('../middlewares/validatons');

app.get('/crash-test', () => {
  setTimeout(() => {
    throw new Error('Сервер сейчас упадёт');
  }, 0);
});

router.post('/signin', validateLogin, login);

router.post('/signup', validateRegistration, createUser);

router.use(auth);

router.get('/users', validateGetUsers, getUsers);

router.get('/users/me', validateGetCurrentUser, getCurrentUser);

router.patch('/users/me', validateUpdateUser, updateUser);

router.patch('/users/me/avatar', validateUpdateUserAvatar, updateAvatar);

router.get('/users/:userId', validateGetUserById, getUserById);

module.exports = router;
