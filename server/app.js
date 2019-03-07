const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const config = require('./config/db');
const routers = require('./routers/index.router');
var fs = require('fs');
var https = require('https');
/*var key = fs.readFileSync('encryption/private.key');
var cert = fs.readFileSync( 'encryption/primary.crt' );
var ca = fs.readFileSync( 'encryption/intermediate.crt' );
var options = {
    key: key,
    cert: cert,
    ca: ca
};*/
mongoose.connect(config.DB, { useNewUrlParser: true }).then(
    () => {console.log('Database is connected') },
err => { console.log('Can not connect to the database'+ err)}
);

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept,Authorization, x-access-token,x-request-id, api-version");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Expose-Headers', 'X-Total-Count, Content-Range');
    next();
});
app.use('/api', routers);
app.use(function(err, req, res, next) {
    if(err.name === 'UnauthorizedError') {
        res.status(err.status).send({err});
        console.error(err);
       // logger.error(err);
        return;
    }else{
        next(err);
    }
});
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
});


