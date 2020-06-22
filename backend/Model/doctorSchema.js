const mongoose = require('mongoose')

const doctorSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    mobile : {
        type : String,
        required : true
    },
    gender : {
        type : String,
        required : true
    },
    bio : {
        type : String,
        required : true
    },
    specialisation : {
        type : String,
        required : true
    },
    hospital : {
        type : String,
        required : true
    },
    address : {
        type : String,
        required : true
    },
    language : {
        type : String,
        required : true
    }, 
    state : {
        type : String,
        required : true
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