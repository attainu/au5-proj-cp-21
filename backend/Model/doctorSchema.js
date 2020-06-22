const mongoose = require('mongoose')

const doctorSchema = new mongoose.Schema({
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
    gender : {
        type : String
    },
    license : {
        type : String
    },
    bio : {
        type : String
    },
    specialization : {
        type : String
    },
    hospital : {
        type : String
    },
    address : {
        type : String
    },
    language : {
        type : String
    }, 
    state : {
        type : String
    },
    city : {
        type : String
    }
})

const Doctor = mongoose.model('doctor',doctorSchema)

module.exports = Doctor