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
        type : String,
        required : true
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
        type : String,
        required : true
    },
    age:{
        type:Number,
        required:true
    },
    fees:{
        type: Number,
        required: true
    },
    image:{
        type: String,
        required: true
    },
    LicenseNo:{
        type: String,
        required: true
    },
    education:{
        type: String,
        required: true
    }
})

const Doctor = mongoose.model('doctor',doctorSchema)

module.exports = Doctor