const { Schema, model } = require('mongoose');

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 280
        },
        email: {
            type: String,
            required: true,
            unique: true,

            //add a validation on here 
        }
        // friends: {
        //     thoughts: [{type: Schema.Types.ObjectId, ref: 'friend'}]
        // }
    }
)

const Thought = model('Thought', thoughtSchema);
module.exports = Thought;