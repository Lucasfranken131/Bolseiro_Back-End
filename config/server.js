express = require('express');
app = express();
bodyParser = require('body-parser')
consign = require('consign')

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json());

consign()
    .include('./config/dbConnection.js')
    .then('./app/controllers')
    .then('./app/models')
    .then('./app/routes')
    .into(app)

module.exports = app;