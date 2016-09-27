const express  = require('express');
const events  = require('../lib/events');

const router  = express.Router();

module.exports = function(model) {

    let BookModel  = model.Book;
    
    router
        .route('/borrow/:id')
        .put((req, res, next) => {

            BookModel.findOne({_id: req.params.id})
                .then((result) => {

                    //Will nee dto verify users identity before though

                    if(!result.available) {
                        throw new Error('Book Not available');
                    }

                    result.available = false;
                    return result.save();
                })
                .then((result) => {
                    
                    // For just this presentation let's  assume this dummy user for now

                    let user  = {
                        email: 'dkblay@gmail.com'
                    };

                    events.emit('BORROW_BOOK', user);
                    res.json(result);
                })
                .catch((reason) => {
                    next(reason);
                });
        });
    return router;
}