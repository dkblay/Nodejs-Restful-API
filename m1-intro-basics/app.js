const express = require('express');
const bodyParser = require('body-parser');

const routes  = require('./routes');
const app = express();

let env = process.env.NODE_ENV || 'production';


if (env === 'production') {
  // read configuration for various environments
} else {
   
}

app.set('port', process.env.ENV_PORT || 8000);

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => res.send('Welcome to our express APP'));

//Routes
routes(app);


app.listen(app.get('port'), () => {
    console.log(`listing on ${app.get('port')}`)
    console.log(`ENV: ${env}`);
});