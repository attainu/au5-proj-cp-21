const mongoose = require('mongoose')

const doctorSchema = new mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    mobile: {
        type: String
    },
    gender: {
        type: String
    },
    bio: {
        type: String
    },
    specialisation: {
        type: String
    },
    hospital: {
        type: String
    },
    address: {
        type: String
    },
    language: {
        type: String
    },
    state: {
        type: String
    },
    city: {
        type: String,
    },
    age: {
        type: String
    },
    fees: {
        type: String
    },
    image: {
        type: String,
        default: "https://res.cloudinary.com/dsmr18nsi/image/upload/v1592852682/22_yi2ky2.jpg"
    },
    licenseNo: {
        type: String
    },
    qualification: {
        type: String
    },
    appointments: [
        {
            date: {
                type: String,
                defalut: "check"

            },
            slot_1: {
                type: Boolean,
                default : false
            },
            slot_2: {
                type: Boolean,
                default : false
            },
            slot_3: {
                type: Boolean,
                default : false
            },
            slot_4: {
                type: Boolean,
                default : false
            },
            slot_5: {
                type: Boolean,
                default : false
            },
            slot_6: {
                type: Boolean,
                default : false
            }
        }
    ]
})

const Doctor = mongoose.model('doctor', doctorSchema)

module.exports = Doctor