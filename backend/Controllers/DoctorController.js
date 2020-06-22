const DoctorSchema = require('../Model/doctorSchema')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')
const doctorController = {}


doctorController.register = function (req, res) {
    jwt.verify(req.query.token, "amit", function (err, decode) {
        // console.log('decode', decode)
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
    const { email, password} = req.body
    console.log(email,password)
    DoctorSchema.findOne({email : email}).then( user => { 
        bcrypt.compare(password, user.password, function(err,result){
            if(result){
                jwt.sign(
                    {id : user._id},
                    "sharma",
                    { expiresIn : 3600},
                    (err, token) => {
                        if(err) throw err;
                        res.json({
                            token,
                            user : {
                                id : user.id,
                                email : user.email
                            }
                        })
                    }
                )
            }
        });
 
    })
    
 }
    doctorController.searchSpeciality=async (req,res)=>{
    try{
        let speciality= req.params.search
        // console.log(speciality)
        let doc = await DoctorSchema.find({specialisation:speciality});
        // console.log(doc)
        res.send(doc);
    }
    catch(err){
        console.log(err)
    }
   }


doctorController.addDoctor= async(req,res)=>{
    const userId = req.user.id
    const {name, gender, image, license, qualification,bio,specialisation,hospital,address,language,state,city,age,fees}=req.body
    const doctor = await DoctorSchema.findOne({_id:userId})
    // console.log(doctor)
    doctor.name=name
    doctor.gender=gender
    doctor.image=image
    doctor.license=license
    doctor.qualification = qualification
    doctor.bio = bio
    doctor.specialisation = specialisation
    doctor.hospital = hospital
    doctor.address = address
    doctor.language = language
    doctor.state=state
    doctor.city=city
    doctor.fees=fees
    doctor.age= age
    doctor.save();
    // console.log(doctor)
}


module.exports = doctorController