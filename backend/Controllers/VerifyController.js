const nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken')

const verifyController = {}


verifyController.verify = function(req,res){

  var userEmail = req.body.email
  var userInfo = req.body.userinfo
  jwt.sign(
       req.body,
      "amit",
      { expiresIn : 600},
     async (err, token) => {
          
          if(err) throw err;
          console.log("token",token)
            //step 1
  let transpoter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth : {
        user : "medicalapp331@gmail.com",
        pass : "rajat@1993"
      }
    })

    //step 2
    let mailOptions ={
      from : "medicalapp331@gmail.com",
      to : userEmail,
      subject : "Med - Tech ",
      text: "IT works",
      html:
      "Welcome to Med-Tech.Please click on Link to register Your account.<br><a href=http://localhost:3010/"+userInfo+"?token="+token+" target='_blank'>http://localhost:3010/doc?token="+token+"</a>"  
    }

  await  transpoter.sendMail(mailOptions, function(err, userData) {
      if(err){
        console.log("error occurs",err)
      }else{
    
      }
    })
}
  )


   res.send("Please verify account")

}

module.exports = verifyController