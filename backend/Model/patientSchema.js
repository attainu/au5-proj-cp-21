const mongoose = require('mongoose');

const PatientSchema = new mongoose.Schema({
    name : {
        type : String
    },
    email : {
        type : String
    },
    password : {
        type : String
    },
    mobile : {
        type : String
    },
    age : {
        type : Number
    },
    gender : {
        type : String
    },
    state:{
        type:String
    },
    city:{
        type:String
    }
})

const Patient = mongoose.model("patients",PatientSchema);
module.exports = Patient