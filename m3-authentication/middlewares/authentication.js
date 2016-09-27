const jwt = require('jsonwebtoken');

module.exports = function (app) {

    return function (req, res, next) {
        // check header or url parameters or post parameters for token
        let token = req.body.token || req.query.token || req.headers['x-access-token'];

        if (!token) {
            return next({
                status: 403,
                success: false,
                message: 'No token provided'
            });
        }

        jwt.verify(token, app.get('superSecret'), function(err, decoded) {

            if(err) return next({ success: false, message: 'Failed to authenticate token.' });
            res.locals.decoded = decoded
            next();
        });
    }
};