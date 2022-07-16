const { Schema, model } = require('mongoose');

const ThoughtsSchema = new Schema({
    title: String,
    body: String
});

const Thoughts = model('Thoughts', ThoughtsSchema);

module.exports = Thoughts;