const express  = require('express')
const cors = require('cors')

var app = express();
// const mongoose = require('mongoose')
// const db = "mongodb://127.0.0.1:27017/medtech"

app.use(express.json());


app.use(express.json());

app.use('/',require('./Routes/PatientRoute'))
app.use('/',require('./Routes/DoctorRoute'))
app.use('/',require('./Routes/VerifyRoute'))
app.use('/',require('./Routes/LoginRoute'))

// mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  
//   .then(console.log("Mongodb connected...."))
//   .catch(err => console.log(err));
module.exports = app
