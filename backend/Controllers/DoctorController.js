const DoctorSchema = require('../Model/doctorSchema')
const doctorController = {}

doctorController.register = function(req,res){
    res.send("hello ji")
}

module.exports = doctorController