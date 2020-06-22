import React from 'react';
import { useForm } from 'react-hook-form'
function ForgotPassword() {
  const { register : register3, handleSubmit : handleSubmit3, errors : errors3 } = useForm()
  const onsubmit = (data) => {
    console.log(data)
  }
  return (
    <div>
      <div>
      <from onSubmit={handleSubmit3(onsubmit)}>
        <div className="form-group">
          <label className="d-block"><b>As a</b></label>
          <input type="radio" className="userInfo" name="userinfoo" value="doc" ref={register3({ required: true })}></input><b>  Doctor</b>
          <input type="radio" className="userInfo ml-5" name="userinfoo" value="patient" ref={register3({ required: true })}  ></input><b>  Patient</b>
          {errors3.userinfo && <p style={{ color: "red" }}>Please select one</p>}
        </div>
        <div className="form-group">
          <label for="userEmail"><b>Please Enter Your Email</b></label>
          <input type="text" className="form-control" id="userEmail" name="emaill" ref={register3({ required: true })} placeholder="email"></input>
          {errors3.emaill && <p style={{ color: "red" }}>Please enter a valid Email</p>}
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-warning">Submit</button>
        </div>
      </from>
      </div>
    </div>
  )
}

export default ForgotPassword;