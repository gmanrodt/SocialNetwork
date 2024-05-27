const { Thought } = require('../models/index.js');

module.exports = {

    async getThought(req, res) {
        try {
            const thought = await Thought.find().populate('friend');
            res.json(thought);
        }
        catch (err) {
            res.status(500).json(err);
        }
    },


    async getOneThought(req, res) {
        try {
            const thought = await Thought.findOne({ _id: [req.params.id] }).populate('friend')
            res.json(thought);
        }
        catch (err) {
            res.status(500).json(err);
        }
    },

    async createThought(req, res){
        try {
            const thought = await Thought.create()
            res.json(thought)
        }
        catch (err){
            console.log(err);
            return res.status(500).json(err);
        }
    },

    async updateThought(req, res) {
        try {
            const thought = await Thought.findOneAndUpdate(
                { _id: req.params.userId },
                { $set: req.body }
            )
            res.json(thought);
        }
        catch (err) {
            res.status(500).json(err);
        }
    },

    async deleteThought(req, res) {
        try {
            const thought = await Thought.findOneAndDelete({ _id: req.params.id });
            res.status(200).json("OK");
        }
        catch (err) {
            res.status(500).json(err);
        }
    }
}