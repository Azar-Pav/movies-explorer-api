const router = require('express').Router();

const {
  checkCreateMovie,
  checkMovieId,
} = require('../middlewares/requestValidators');

const {
  createMovie,
  findMovies,
  deleteMovie,
} = require('../controllers/movies');

router.get('', findMovies);
router.post('', checkCreateMovie, createMovie);
router.delete('/:movieId', checkMovieId, deleteMovie);

module.exports = router;
