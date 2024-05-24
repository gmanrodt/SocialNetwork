const router = require("express").Router();
const { getThought, getOneThought, updateThought, deleteThought } = require('../../controllers/thought.controllers');

router
    .route('/')
    .get(getThought)
    .post(updateThought);

router
    .route('/:id')
    .get(getOneThought)
    .put(updateThought)
    .delete(deleteThought);

module.exports = router;