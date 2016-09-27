const express = require('express');
const bookRouter = express.Router();


module.exports = function (model) {
    let BookModel = model.Book;

    bookRouter
        .route('/')
        .get((req, res, next) => {
            
            BookModel.find({})
                .then((result) => {
                   res.json(result);
                    
                })
                .catch((reason) => {
                    next(reason);
                })
        })
    
    bookRouter
        .route('/:id')
        .get((req, res, next) => {

            BookModel.findOne({_id: req.params.id})
                .then((result) => {
                    res.json(result)
                })
                .catch((reason) => {
                    next(reason);
                });
        });

    return bookRouter;
};