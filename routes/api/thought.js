const router = require("express").Router();
const { getThought, getOneThought, updateThought, deleteThought, createThought } = require('../../controllers/thought.controllers');

router
    .route('/')
    .get(getThought)
    .post(createThought);

router
    .route('/:id')
    .get(getOneThought)
    .put(updateThought)
    .delete(deleteThought);

module.exports = router;