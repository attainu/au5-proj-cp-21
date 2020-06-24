const DoctorSchema = require('../Model/doctorSchema')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')
const nodemailer = require('nodemailer')
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


//set New Password for Docotr
doctorController.setpass = function(req,res){
    const { email, userInfo } = req.body
    DoctorSchema.findOne({email : email}).then(user =>{
        let data = {
            _id : user._id,
            userInfo : userInfo
        }
        jwt.sign(
            data,
           "amit",
           { expiresIn : 600},
          async (err, token) => {
               
               if(err) throw err;
               console.log("token",token)
                 //step 1
       let transpoter = nodemailer.createTransport({
           host: 'smtp.gmail.com',
           port: 465,
           secure: true,
           auth : {
             user : "medicalapp331@gmail.com",
             pass : "rajat@1993"
           }
         })
     
         //step 2
         let mailOptions ={
           from : "medicalapp331@gmail.com",
           to : email,
           subject : "Med - Tech ",
           text: "IT works",
           html:
           "Welcome to Med-Tech.Please click on Link to set Your New Password <br><a href=http://localhost:3010/setpass?token="+token+" target='_blank'>http://localhost:3010/setpass</a>"  
         }
     
       await  transpoter.sendMail(mailOptions, function(err, userData) {
           if(err){
             console.log("error occurs",err)
           }else{
             console.log("Email sent for set password", userData)
             res.json(token)
           }
         })
   }
       )
   
    })

}

doctorController.doctor = function(req,res){
    const{ id } =req.body;
    DoctorSchema.findById(id, function(err,resp){
        if(err) console.log('Server Error')
        res.send(resp)
    }) 
}
module.exports = doctorController