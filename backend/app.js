const express  = require('express')
const cors = require('cors')

var app = express();

app.use(express.json());
app.use(cors())
app.use('/',require('./Routes/PatientRoute'))
app.use('/doctor',require('./Routes/DoctorRoute'))

module.exports = app