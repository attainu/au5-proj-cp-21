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
    bio : {
        type : String
    },
    specialisation : {
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
    },
    age:{
        type:Number
    },
    fees:{
        type: Number
    },
    image:{
        type: String
    },
    LicenseNo:{
        type: String
    },
    education:{
        type: String,
    }
})

const Doctor = mongoose.model('doctor',doctorSchema)

module.exports = Doctor