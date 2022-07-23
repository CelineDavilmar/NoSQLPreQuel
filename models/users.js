const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    username: {
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


userSchema.virtual("friendCount").get(function () {
    return this.friends.length();
})
const User = model('User', userSchema);
module.exports = User;