const bookRouter  = require('./book.route');
const adminRouter  = require('./admin.route');
const bookActionsRouter  = require('./bookActions.route');

const model  = require('../models');

module.exports  = function(app) {
    app.use('/api/books', bookRouter(model));
    app.use('/api/admin', adminRouter(model));
    app.use('/api', bookActionsRouter(model));
};