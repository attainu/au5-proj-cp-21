const express  = require('express')
var app = express();
app.use(express.json());

app.use('/',require('./Routes/PatientRoute'))
app.use('/'.require('./Routes/DoctorRoute'))

module.exports = app