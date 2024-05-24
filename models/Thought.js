const { Schema, Types } = require('mongoose');

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
        },
        thoughts: {
            thoughts: [{type: Schema.Types.ObjectId, ref: 'thought'}]
        },
        friends: {
            thoughts: [{type: Schema.Types.ObjectId, ref: 'friend'}]
        }
    }
)

const Thought = model('thought', thoughtSchema);
module.exports = Thought;