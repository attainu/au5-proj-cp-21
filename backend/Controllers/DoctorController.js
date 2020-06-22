const Doctor = require('../Model/doctorSchema')
const doctorController = {}

doctorController.register = function(req,res){
    res.send("hello ji")
}


doctorController.searchSpeciality=async(req,res)=>{
    try{
        let speciality= req.params.search
        console.log(speciality)
        let doc = await Doctor.find({});
        console.log(doc)
        res.send(doc);
    }
    catch(err){
        console.log(err)
    }
}
module.exports = doctorController