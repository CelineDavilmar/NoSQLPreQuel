const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    name: {
        type: String,
        require: true,
        unique: true
    },
    email: {
        type: String,
        unique: true,
        require: true,
    },
    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Thoughts'
        }
    ],
    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    ]
});

const User = mongoose.model('User', UserSchema);
module.exports = User;