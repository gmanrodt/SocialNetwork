const { User } = require('../models')

module.exports = {

    async getUser(req, res) {
        try {
            const user = await User.find().populate('friend')
        }
        catch (err) {
            res.status(500).json(err);
        }
    },


    async getOneUser(req, res) {
        try {
            const user = await User.findOne({ _id: [req.params.courseId] }).populate('friend')
        }
        catch (err) {
            res.status(500).json(err);
        }
    },

    async createUser(req, res){
        try{
            const user = await User.create(req.body);
            res.json(user)
        }
        catch (err){
            console.log(err)
            return res.status(500).json(err);
        }
    },

    async updateUser(req, res) {
        try {
            const user = await User.findOneAndUpdate(
                { _id: req.params.userId },
                { $set: req.body }
            )
        }
        catch (err) {
            res.status(500).json(err);
        }
    },

    async deleteUser(req, res) {
        try {
            const user = await User.findOneAndDelete({ _id: req.params.userId });
        }
        catch (err) {
            res.status(500).json(err);
        }
    }
};

