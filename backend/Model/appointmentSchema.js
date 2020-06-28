const mongoose = require('mongoose')

const appointmentSchema = new mongoose.Schema({
    date: {
        type: String
    },
    docId : {
        type: String
    },
    slot_1: {
        type: String,
        default : false
    },
    slot_2: {
        type: String,
        default : false
    },
    slot_3: {
        type: String,
        default:  false
    },
    slot_4: {
        type: String,
        default : false
    },
    slot_5: {
        type: String,
        default : false
    },
    slot_6: {
        type: String,
        default : false
    }
})

const Appointment = mongoose.model('appointments', appointmentSchema)

module.exports = Appointment