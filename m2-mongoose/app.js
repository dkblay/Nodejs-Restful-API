const express = require('express');
const bodyParser = require('body-parser');
const mongoose  = require('mongoose');
const config  = require('./config/config');
const email  =  require('./lib/email')();

const routes  = require('./routes');
const app = express();

let env = process.env.NODE_ENV || 'development';


if (env === 'production') {
  // read configuration for various environments
} else {
   
}

mongoose.Promise  = global.Promise;

mongoose.connect(config.db);

let db  = mongoose.connection;
db.on('error', (err) => {
    console.log(err);
});

db.once('open', () => {
    console.log('Connected to mongdb');
});

app.set('port', config.port);

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', (req, res) => res.send('Welcome to our express APP'));

//Routes
routes(app);


app.use((err, req, res, next) => {
    res.status(err.status || 500).send({
        title: 'error',
        message: 'Server error',
        error: err.message
    })
})

app.listen(app.get('port'), () => {
    console.log(`listing on ${app.get('port')}`)
    console.log(`ENV: ${env}`);
});