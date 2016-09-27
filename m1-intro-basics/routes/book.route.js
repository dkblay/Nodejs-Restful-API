const express  = require('express');
const bookRouter  = express.Router();


module.exports =  function(model) {
    bookRouter
    .route('/')
    .get((req, res) => {
        res.status(200).json(model.books);
    })
    .post((req, res) => {

    })

    return bookRouter;
};