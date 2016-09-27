let env = process.env.NODE_ENV || 'development';


let config = {
    development: {
        port: process.env.ENV_PORT || 8000,
        db: 'mongodb://localhost:27017/testLib',
        secret: 'secret'
    },

    production: {
        port: process.env.ENV_PORT || 8000,
        db: 'mongodb://localhost:27017/bookApp',
        secret: 'secret'
        
    }
};

module.exports = config[env];