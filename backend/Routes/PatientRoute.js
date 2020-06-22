const express = require('express');
const router = express.Router()
const patientController = require('../Controllers/PatientController')
const auth = require('../middleware/auth')

router.post("/addpatient",auth,patientController.addPatient)

module.exports = router