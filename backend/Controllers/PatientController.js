const PatientSchema = require('../Model/patientSchema');
const DoctorSchema = require('../Model/doctorSchema')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')
const nodemailer = require('nodemailer')
const patientController = {}

patientController.register = function (req, res) {
    jwt.verify(req.query.token, "amit", function (err, decode) {

        if (decode) {
            PatientSchema.findOne({ email: decode.email }).then(user => {
                if (!user) {
                    bcrypt.hash(decode.password, 10, (err, hash) => {
                        if (err) console.log(err)
                        else {
                            const newUser = new PatientSchema({
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
                } else { res.send("user already exists") }
            })

        } else (
            res.send("This link is expired. Please register again.")
        )

    })

}

patientController.login = function(req,res){
    const { email, password } = req.body
    console.log(email, password)
    PatientSchema.findOne({ email: email }).then(user => {
        bcrypt.compare(password, user.password, function (err, result) {
            if (result) {
                jwt.sign(
                    { id: user._id },
                    "sharma",
                    { expiresIn: 3600 },
                    (err, token) => {
                        if (err) throw err;
                        res.json({
                            token,
                            user: {
                                id: user.id,
                                email: user.email
                            }
                        })
                    }
                )
            }
        });

    })
}

patientController.addPatient = async(req,res)=>{
    const userId = req.user.userId
    const { name, gender,  state, city, age } = req.body
    var patient = await PatientSchema.find({_id:userId})
    patient.name=name
    patient.gender=gender
    patient.state= state
    patient.city= city
    patient.age= age
    patient.save()

}

patientController.searchSpeciality=async (req,res)=>{
    try{
        let speciality= req.params.search
        let doc = await DoctorSchema.find({specialisation:speciality});
        console.log("myDOC", doc)
        res.send(doc);
    }
    catch(err){
        console.log(err)
    }
   }

// Set new Password for Pateint
patientController.setpass = function (req, res) {
    const { email, userInfo } = req.body
    PatientSchema.findOne({ email: email }).then(user => {
        if (user) {
            let data = {
                _id: user._id,
                userInfo: userInfo
            }
            jwt.sign(
                data,
                "amit",
                { expiresIn: 600 },
                async (err, token) => {

                    if (err) throw err;
                    console.log("token", token)
                    //step 1
                    let transpoter = nodemailer.createTransport({
                        host: 'smtp.gmail.com',
                        port: 465,
                        secure: true,
                        auth: {
                            user: "medicalapp331@gmail.com",
                            pass: "rajat@1993"
                        }
                    })

                    //step 2
                    let mailOptions = {
                        from: "medicalapp331@gmail.com",
                        to: email,
                        subject: "Med - Tech ",
                        text: "IT works",
                        html:
                            "Welcome to Med-Tech.Please click on Link to set Your New Password <br><a href=http://localhost:3010/setpass?token=" + token + " target='_blank'>http://localhost:3010/setpass</a>"
                    }

                    await transpoter.sendMail(mailOptions, function (err, userData) {
                        if (err) {
                            console.log("error occurs", err)
                        } else {
                            console.log("Email sent for set password", userData)
                            res.json(token)
                        }
                    })
                }
            )
            }
        })

}

module.exports = patientController