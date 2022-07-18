const { Schema, model } = require('mongoose');

const ThoughtsSchema = new Schema({
    /* title: String,
    body: String */
    thoughtText: {
        type: String,
        require: true,
        min: 1,
        max: 280
    },
    createdAt: {
        date: { type: Date, default: Date.now },
    },
    usernames: {
        type: String,
        require: true,
    },
    reactions: {
        type: Schema.Types.ObjectId,
        //ref:
    }
});

const Thoughts = mongoose.model('Thoughts', ThoughtsSchema);
module.exports = Thoughts;
