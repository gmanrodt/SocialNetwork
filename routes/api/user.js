const router = require("express").Router();
// const  User = require("../../controllers/user.controllers")
const{
    getUser,
    getOneUser,
    createUser,
    updateUser,
    deleteUser,
} = require('../../controllers/user.controllers');


router
.route('/').get(getUser)
.get(getOneUser)
.post(createUser)
.put(updateUser)
.delete(deleteUser)

module.exports = router;