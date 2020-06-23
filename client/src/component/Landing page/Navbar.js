import React, { useRef } from "react";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import "../../App.css";
import axios from "axios";
import { useForm } from "react-hook-form"
import { withRouter, useHistory } from "react-router-dom";


function Navbar() {
  const { register, handleSubmit, errors } = useForm();
  const history = useHistory()
  const {
    register: register2,
    errors: errors2,
    handleSubmit: handleSubmit2
  } = useForm();
  
  const password = useRef({});
  var userData = null;
  const onSubmit = (data) => {
    axios.post("http://localhost:3010/verify", data).then(res => {
      console.log(res.data)
    })

    //console.log(data)
  }

  const onLogin = (data) => {
    console.log("login",data)
    axios.post("http://localhost:3010/login", data).then(res => {
      if(data.userinfo == 'patient'){
         localStorage.setItem('patientAuth', res.data.token);
          history.push('/patient')
      }else{
      localStorage.setItem('doctorAuth', res.data.token);
      history.push('/doc')
      }
    })
    
  }
  
  
  return (
    <div className="row">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <a className="navbar-brand ml-5" href="/userwelcome">LOGO</a>

          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">

            <button type="button" className="btn btn-warning mr-3" data-toggle="modal" data-target="#userLogin">
              <b>Login</b>
            </button>
            <button type="button" className="btn btn-warning mr-5" data-toggle="modal" data-target="#userSignup">
              <b>Register</b>
            </button>
          </div>
        </nav>
      </div>
      <div className="modal fade" id="userLogin" data-backdrop="false" tabindex="-1" role="dialog"
        aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">Login</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit2(onLogin)}>
              <div className="form-group">
                  <label className="d-block"><b>As a</b></label>
                  <input type="radio"  className="userInfo" name="userinfo" value="doc" ref={register2({required : true})}></input><b>  Doctor</b>
                  <input type="radio" className="userInfo ml-5" name="userinfo" value="patient" ref={register2({required : true})}  ></input><b>  Patient</b>
                  {errors2.userinfo && <p style={{ color: "red" }}>Please select one</p>}
                </div>
                <div className="form-group">
                  <label for="userLoginEmail"><b>Email address</b></label>
                  <input type="email" className="form-control" id="userLoginEmail"
                    aria-describedby="emailHelp" name="email" ref={register2({required : true})} placeholder="Enter email"></input>
                </div>
                <div className="form-group">
                  <a href="/forgotpassword" className="float-right text-warning" target="_blank">Forgot Password</a>
                </div>
                <div className="form-group">
                  <label for="userLoginPassword"><b>Password</b></label>
                  <input type="password" className="form-control" name="password" ref={register2({required : true})} id="userLoginPassward"
                    placeholder="Password"></input>
                </div>
                <div className="form-group">
                  <button type="submit" className="btn btn-warning"><b>Submit</b></button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" id="userSignup" data-backdrop="false" tabindex="-1" role="dialog"
        aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">Register</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit(onSubmit)}>
                
                <div className="form-group">
                  <label className="d-block"><b>As a</b></label>
                  <input type="radio"  className="userInfo" name="userinfo" value="doc" ref={register({required : true})}></input><b>  Doctor</b>
                  <input type="radio" className="userInfo ml-5" name="userinfo" value="patient" ref={register({required : true})}  ></input><b>  Patient</b>
                  {errors.userinfo && <p style={{ color: "red" }}>Please select one</p>}
                </div>

                <div className="form-group">
                  <label for="userEmail"><b>Email address</b></label>
                  <input type="text" name="email" className="form-control" id="userEmail"
                    aria-describedby="emailHelp" ref={register({ required: true, pattern: /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/ })} placeholder="Enter email"></input>
                  {errors.email && <p style={{ color: "red" }}>Please enter valid E-mail</p>}
                </div>
                <div className="form-group">
                  <label for="mobNum"><b>Mobile Number</b></label>
                  <input type="text" name="mobile" id="mobNum" className="form-control" ref={register({ required: true, min: 10, max: 10, pattern: /[7-9]{1}[0-9]{9}/ })} placeholder="Mobile number"></input>
                  {errors.mobile && <p style={{ color: "red" }}>Mobile number is in-valid</p>}
                </div>
                <div className="form-group">
                  <label for="exampleInputPassword1"><b>Password</b></label>
                  <input type="password" name="password" ref={register({ required: "You must specify a password", minLength: 8 })} className="form-control" id="exampleInputPassword1"
                    placeholder="Password"></input>
                  {errors.password && <p style={{ color: "red" }}>Password should be 8 character long</p>}
                </div>
                <div className="form-group">
                  <label for="exampleInputPassword2"><b>Confirm Password</b></label>
                  <input type="password" name="cPassword" ref={register({ required: true })} className="form-control" id="exampleInputPassword2"
                    placeholder="Confirm Password"></input>

                </div>
                <div className="modal-footer">
                  <button type="submit" className="btn btn-warning">
                    <b>Submit</b>
                  </button>
                </div>

              </form>
            </div>

          </div>
        </div>
      </div>
    </div>

  );

}
export default withRouter(Navbar);