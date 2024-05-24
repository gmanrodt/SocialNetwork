const router = require("express").Router();
const { getFriend, getOneFriend, deleteFriend, updateCourse } = require('../../controllers/friend.controllers');

router
    .route('/')
    .get(getFriend)
    // .post(updateCourse) // Assuming you want to create a new friend here
    .delete(deleteFriend);

router
    .route('/:id')
    .get(getOneFriend)
    // .put(updateCourse) // Assuming you want to update a specific friend here

module.exports = router;