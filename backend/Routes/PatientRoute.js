const express = require('express');
const router = express.Router()
const patientController = require('../Controllers/PatientController')

router.get("/patient",(req,res) => {
    patientController.register(req,res)
})


module.exports = router