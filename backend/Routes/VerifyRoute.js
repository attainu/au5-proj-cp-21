const express = require('express')
const router = express.Router();
const verifyController = require("../Controllers/VerifyController");

router.post("/verify",(req,res) => {
    verifyController.verify(req,res)
})

module.exports = router