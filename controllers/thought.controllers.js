const { Thought } = require('../models')

module.exports = {

    async getThought(req, res) {
        try {
            const thought = await Thought.find().populate('friend')
        }
        catch (err) {
            res.status(500).json(err);
        }
    },


    async getOneThought(req, res) {
        try {
            const thought = await Thought.findOne({ _id: [req.params.courseId] }).populate('friend')
        }
        catch (err) {
            res.status(500).json(err);
        }
    },

    async updateThought(req, res) {
        try {
            const thought = await Thought.findOneAndUpdate(
                { _id: req.params.userId },
                { $set: req.body }
            )
        }
        catch (err) {
            res.status(500).json(err);
        }
    },

    async deleteThought(req, res) {
        try {
            const thought = await Thought.findOneAndDelete({ _id: req.params.userId });
        }
        catch (err) {
            res.status(500).json(err);
        }
    }
}