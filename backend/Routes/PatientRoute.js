const express = require('express');
const router = express.Router()
const patientController = require('../Controllers/PatientController')
const auth = require('../middleware/auth')
router.get('/patient',(req,res)=>{
      patientController.register(req,res)
})

// router.post('/login',patientController.login)
router.post("/addpatient",auth,patientController.addPatient)
router.get("/:search", auth, patientController.searchSpeciality)

module.exports = router