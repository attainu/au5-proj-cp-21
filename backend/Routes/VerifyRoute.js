const express = require('express')
const router = express.Router();
const verifyController = require("../Controllers/VerifyController");
const doctorController = require('../Controllers/DoctorController');

router.post("/verify",(req,res) => {
    verifyController.verify(req,res)
})

//set New Password
router.post("/setpassword",(req,res) => {
    if(req.body.userinfo == "doc"){
        doctorController.setpass(req,res)

    }
    if(req.body.userinfo == "patient"){
        
    }
})

module.exports = router