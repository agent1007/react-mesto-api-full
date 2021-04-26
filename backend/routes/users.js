const router = require('express').Router();

const {
  getUsers, getUserById, updateUser, updateAvatar, getCurrentUser,
} = require('../controllers/users');
const auth = require('../middlewares/auth');

const {
  validateGetUsers,
  validateGetUserById,
  validateUpdateUserAvatar,
  validateUpdateUser,
  validateGetCurrentUser,
} = require('../middlewares/validatons');

router.use(auth);

router.get('/', validateGetUsers, getUsers);

router.get('/me', validateGetCurrentUser, getCurrentUser);

router.patch('/me', validateUpdateUser, updateUser);

router.patch('/me/avatar', validateUpdateUserAvatar, updateAvatar);

router.get('/:userId', validateGetUserById, getUserById);

module.exports = router;
