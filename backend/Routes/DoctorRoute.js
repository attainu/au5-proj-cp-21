const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth')
const doctorController = require('../Controllers/DoctorController')

router.get('/doc', doctorController.register)

router.post('/adddoctor',auth,doctorController.addDoctor)



//router.get("/:search", doctorController.searchSpeciality)
module.exports = router