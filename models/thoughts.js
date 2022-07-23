const { Schema, model } = require('mongoose');

const thoughtsSchema = new Schema({
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

thoughtsSchema.virtual("reactionCount").get(function () {
    return this.reactions.length();
});

const Thoughts = model('Thoughts', thoughtsSchema);
module.exports = Thoughts;
