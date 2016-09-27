const express = require('express');
const adminRouter = express.Router();


module.exports = function (model) {
    adminRouter
        .route('/books/add')
        .post((req, res) => {

            let book = req.body;

            model.books.push({
                name: book.name,
                isbn: book.isbn,
                author: book.author,
                pages: book.pages,
                available: false
            });

            res.status(201).json(book);
        });

    return adminRouter;

};