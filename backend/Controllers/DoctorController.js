const DoctorSchema = require('../Model/doctorSchema')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')
const doctorController = {}


doctorController.register = function (req, res) {
    jwt.verify(req.query.token, "amit", function (err, decode) {
        console.log('decode', decode)
        if (decode) {
            DoctorSchema.findOne({ email: decode.email }).then(user => {
                if (!user) {
                    bcrypt.hash(decode.password, 10, (err, hash) => {
                        if (err) console.log(err)
                        else {
                            const newUser = new DoctorSchema({
                                email: decode.email,
                                mobile: decode.mobile,
                                password: hash
                            })
                            newUser.save((err, user) => {
                                if (err) return console.error(err);
                                res.send(user)
                            })
                        }
                    })
                }else{ res.send("user already exists")}
            })

        } else (
            res.send("This link is expired. Please register again.")
        )

    })

}

doctorController.login = function(req,res){
    
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