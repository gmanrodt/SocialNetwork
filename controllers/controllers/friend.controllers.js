const { Friend } = require('../models')

module.exports = {

    async getFriend(req, res) {
        try {
            const friend = await Friend.find()
        }
        catch (err) {
            res.status(500).json(err);
        }
    },


    async getOneFriend(req, res) {
        try {
            const friend = await Friend.findOne({ _id: [req.params.id] })
        }
        catch (err) {
            res.status(500).json(err);
        }
    },

    async deleteFriend(req, res) {
        try {
            const friend = await Friend.findOneAndDelete({ _id: req.params.id });
        }
        catch (err) {
            res.status(500).json(err);
        }
    }
}