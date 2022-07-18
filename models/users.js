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
    notes: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Thoughts'
        }
    ]
});

const User = model('User', UserSchema);

module.exports = User;