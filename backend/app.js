const express  = require('express')
var path = require("path")
const cors = require('cors')

var app = express();

app.use(express.json());
app.use(cors())

app.use('/',require('./Routes/PatientRoute'))
app.use('/',require('./Routes/DoctorRoute'))
app.use('/',require('./Routes/VerifyRoute'))
app.use('/',require('./Routes/LoginRoute'))
app.use('/',require('./Routes/NewPassRoute'))


module.exports = app
