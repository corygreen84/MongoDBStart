const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const jwt = require('express-jwt');
const jwks = require('jwks-rsa');
const app = express();

require('dotenv/config');


const route = require('./Routes/routes');

var jwtCheck = jwt({
    secret: jwks.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: 'https://dev-z054bswt.auth0.com/.well-known/jwks.json'
    }),
    audience: 'test-api',
    issuer: 'https://dev-z054bswt.auth0.com/',
    algorithms: ['RS256']

});

//app.use(jwtCheck);
app.use(bodyParser.json());
app.use('/', route);



// connect to db //
mongoose.connect(process.env.DB_CONNECTION,{ useNewUrlParser: true }, () => {
    console.log('connected just fine');
});

// Start listening to the server //
app.listen(3000);