import React from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'

function ChangePass(){
    var token = localStorage.getItem('setpass')
    const { register, handleSubmit , errors} = useForm()

    const setPass = (data) => {
        data.token = token
        delete data.cPassword
        axios.post("http://localhost:3010/setpass",data).then(res => {
            console.log(res.data)
        })
        
    }
    return(
        <div>

      <div className="row mt-5">
        <div className="col-4"></div>
        <div className="col-4">
          <div class="card border-warning mb-3">
            <div class="card-header"><b>Set Your New Password</b></div>
            <div class="card-body">
              <form onSubmit={handleSubmit(setPass)}>
                <div className="form-group">
                  <label for="newpass"><b>Enter Your New Password</b></label>
                  <input type="password" className="form-control" id="newpass" name="password" ref={register({ required: true, minLength : 8})} placeholder="New Password"></input>
                  {errors.password && <p style={{ color: "red" }}>Password must be 8 character long</p>}
                </div>
                <div className="form-group">
                  <label for="cpass"><b>Please Enter Your Email</b></label>
                  <input type="password" className="form-control" id="cpass" name="cPassword" ref={register({ required: true, minLength : 8})} placeholder="Confirm New Password"></input>
                  {errors.cPassword && <p style={{ color: "red" }}>Password does not match</p>}
                </div>

                <div className="form-group">
                  <button type="submit" className="btn btn-warning">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="col-4"></div>
      </div>
    </div>
    )
}

export default ChangePass