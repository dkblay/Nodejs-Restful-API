const mongoose = require('mongoose');

const Schema  = mongoose.Schema;

let bookSchema  = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    isbn: String,
    author: String,
    pages: Number,
    available: Boolean
});

module.exports  = mongoose.model('Book', bookSchema, 'books');