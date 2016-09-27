const bookRouter  = require('./book.route');
const adminRouter  = require('./admin.route');
const bookActionsRouter  = require('./bookActions.route');
const userRouter  = require('./user.route');

const model  = require('../models');

module.exports  = function(app) {
    app.use('/api/books', bookRouter(model, app));
    app.use('/api/admin', adminRouter(model, app));
    app.use('/api', bookActionsRouter(model, app));
    app.use('/api', userRouter(model, app));
};