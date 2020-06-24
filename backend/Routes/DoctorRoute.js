const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth')
const doctorController = require('../Controllers/DoctorController')

router.get('/doc', doctorController.register)

router.post('/adddoctor',auth,doctorController.addDoctor)
router.post('/updateprofile', auth, doctorController.updateprofile)

router.get('/getdoctor', auth, doctorController.getDoctor)

module.exports = router