const PatientSchema = require('../Model/patientSchema');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')
const patientController = {}
patientController.register = function (req, res) {
    jwt.verify(req.query.token, "amit", function (err, decode) {
        // console.log('decode', decode)
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
                                res.redirect('http://localhost:3000/')
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

patientController.login = function (req, res) {
    const { email, password } = req.body
    // console.log(email, password)
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

patientController.addPatient = async (req, res) => {
    const userId = req.user.userId
    const { name, gender, state, city, age } = req.body
    var patient = await PatientSchema.find({ _id: userId })
    patient.name = name
    patient.gender = gender
    patient.state = state
    patient.city = city
    patient.age = age
    patient.save()

}

patientController.searchSpeciality = async (req, res) => {
    try {
        let speciality = req.params.search
        // console.log(speciality)
        let doc = await PatientSchema.find({ specialisation: speciality });
        // console.log(doc)
        res.send(doc);
    }
    catch (err) {
        console.log(err)
    }
}

module.exports = patientController