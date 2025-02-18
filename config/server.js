express = require('express');
jwt = require('jsonwebtoken')
cors = require('cors')
app = express();
bodyParser = require('body-parser')
consign = require('consign')

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json());
app.use(cors())

consign()
    .include('./config/dbConnection.js')
    .then('./app/controllers')
    .then('./app/models')
    .then('./app/routes')
    .into(app)

module.exports = app;