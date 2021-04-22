const router = require('express').Router();
const NotFoundError = require('../errors/not-found-error');

const {
  getCards, deleteCard, createCard, likeCard, dislikeCard,
} = require('../controllers/cards');

const {
  validateGetCards, validateCreateCard, validateDeleteCard,
} = require('../middlewares/validatons');

router.get('/', validateGetCards, getCards);

router.post('/', validateCreateCard, createCard);

router.delete('/:cardId', validateDeleteCard, deleteCard);

router.put('/likes/:cardId', validateDeleteCard, likeCard);

router.delete('/likes/:cardId', validateDeleteCard, dislikeCard);

router.use((req, res, next) => {
  next(new NotFoundError('Ресурс по указанному маршруту не найден.'));
});

module.exports = router;
