const router = require('express').Router();

// The below import is for the functions for api requests that are in controllers folder.
const {
  getThoughts,
  getSingleThought,
  createThought,
  deleteThought,
  updateThought,
  createReaction,
  deleteReaction
} = require('../../controllers/thoughtController');

// This basic route allows for getting all thoughts or creating a thought
router.route('/').get(getThoughts).post(createThought);

// This URL with thoughtId allows getting, deleting, or updating a single thought
router.route('/:thoughtId').get(getSingleThought).delete(deleteThought).put(updateThought);

router.route('/:thoughtId/reactions').post(createReaction)

router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction)
                                                                                                                                                                                                                                                                                                                                                                                                                       
module.exports = router;


