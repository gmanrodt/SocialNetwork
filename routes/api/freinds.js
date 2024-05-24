const router = require("express").Router();
const { updateCourse } = require("../../controllers/friend.controllers")
const {
    getFriend,
    getOneFriend,
    deleteFriend
} = require('../../controllers/friend.controllers')

router
.route('/').get(getFriend)
.get(getOneFriend)
.put(updateCourse)
.delete(deleteFriend)


module.exports = router;