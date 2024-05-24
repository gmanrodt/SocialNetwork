const router = require("express").Router();
const {
    getThought,
    getOneThought,
    updateThought,
    deleteThought
} = require('../../controllers/thought.controllers')

router 
    .router('/').get(getThought)
    .get(getOneThought)
    .put(updateThought)
.delete(deleteThought)

module.exports = router;