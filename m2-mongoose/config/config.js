let env = process.env.NODE_ENV || 'development';


let config = {
    development: {
        port: process.env.ENV_PORT || 8000,
        db: 'mongodb://localhost:27017/testLib'
    },

    production: {
        port: process.env.ENV_PORT || 8000,
        db: 'mongodb://localhost:27017/bookApp'
    }
};

module.exports = config[env];