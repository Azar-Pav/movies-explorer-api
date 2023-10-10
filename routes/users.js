const router = require('express').Router();

const {
  checkUpdateUser,
} = require('../middlewares/requestValidators');

const {
  getUserInfo,
  changeUserProfile,
} = require('../controllers/users');

router.get('/me', getUserInfo);
router.patch('/me', checkUpdateUser, changeUserProfile);

module.exports = router;
