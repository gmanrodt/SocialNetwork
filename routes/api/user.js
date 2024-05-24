const router = require("express").Router();
const  User = require("../../controllers/user.controllers")
const{
    getUser,
    getOneUser,
    updateUser,
    deleteUser,
} = require('../../controllers/user.controllers');


router
.route('/').get(getUser)
.get(getOneUser)
.post(updateUser)
.delete(deleteUser)

module.exports = router;