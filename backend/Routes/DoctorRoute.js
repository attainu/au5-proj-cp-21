const express = require('express');
const router = express.Router();
const doctorController = require('../Controllers/DoctorController')

router.get("/",(req,res) => {
    doctorController.register(req,res)
})

module.exports = router