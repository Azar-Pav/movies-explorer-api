const router = require('express').Router();
const userRouter = require('./users');
const movieRouter = require('./movies');
const {
  createUser,
  login,
  logout,
} = require('../controllers/users');

const auth = require('../middlewares/auth');
const {
  checkLogin,
  checkCreateUser,
} = require('../middlewares/requestValidators');

const NotFoundError = require('../errors/NotFoundError');

router.post('/signin', checkLogin, login);
router.post('/signup', checkCreateUser, createUser);
router.post('/signout', logout);
router.use(auth);
router.use('/users', userRouter);
router.use('/cards', movieRouter);
router.use('*', (req, res, next) => {
  next(new NotFoundError('Неправильный путь'));
});

module.exports = router;
