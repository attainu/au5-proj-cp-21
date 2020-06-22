const PatientSchema = require('../Model/patientSchema');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')
const patientController = {}

patientController.register = function (req, res) {
    jwt.verify(req.query.token, "amit", function (err, decode) {
        console.log('decode', decode)
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

patientController.login = function (req, res) {
    res.send("in controller")
}

module.exports = patientController