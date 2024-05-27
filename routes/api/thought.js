const router = require("express").Router();
const { getThought, getOneThought, updateThought, deleteThought, createThought } = require('../../controllers/thought.controllers');

router
    .route('/')
    .get(getThought);

router
    .route('/:id')
    .get(getOneThought)
    .post(createThought)
    .put(updateThought)
    .delete(deleteThought);

module.exports = router;