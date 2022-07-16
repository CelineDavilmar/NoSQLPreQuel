const router = require('express').Router();

const {
    getAllThoughts,
    getThoughtsById,
    deleteThoughts,
    createThoughts,
    addReaction,
    updateThoughts,
    deleteReaction
} = require('../../controllers/thoughts-controller');


router.route('/').get(getAllThoughts);
router.route('/:id').get(getThoughtsById).put(updateThoughts).delete(deleteThoughts);
router.route('/:userId').post(createThoughts);
router.route('/:thoughtId/reactions').post(addReaction);
router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);

module.exports = router;