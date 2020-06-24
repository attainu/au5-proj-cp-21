import React,{useState} from 'react';
import Navbar from './Navbar'
import { useForm } from 'react-hook-form'
import {withRouter, useHistory} from 'react-router-dom';
import axios from 'axios'
function PatientRegistrtation(){
    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const [gender, setGender] = useState("")
    const [state, setState] = useState("")
    const [city, setCity] = useState("")
    const { register, handleSubmit, errors } = useForm();
    let history = useHistory()
    const patientregister=(data)=>{
        console.log("patient data", data)
        let token = localStorage.getItem("patientAuth");
        const pat= {name,age,gender,state,city}
        let request = axios({
            method: "POST",
            url: "http://localhost:3010/addpatient",
            data: pat,
            headers: {
                "x-auth-token": token
            },
        });
        request.then(res => {
            console.log(res)
            history.push('/home');

        })
     
    }
        return (
            <div>
                <Navbar />
                <div className="container">
                    <div className="row">
                        <div className="col-5"></div>
                        <div className="col-7">
                            <h2>Welcome to user Page</h2>
                            <form onSubmit={handleSubmit(patientregister)}>
                                <div className="form-group">
                                    <label for="userName">
                                        <b>Name</b>
                                    </label>
                                    <input type="text" name="name" className="form-control" onChange={(e) => setName(e.target.value)} ref={register({ required: true })} id="userName" aria-describedby="emailHelp" placeholder="Enter name"></input>
                                    {errors.name && <p style={{ color: "red" }}>Please Enter Your Name</p>}
                                </div>
                                <div className="form-group">
                                    <label for="age1">
                                        <b>Age</b>
                                    </label>
                                    <input type="number" name="age" className="form-control" onChange={(e) => setAge(e.target.value)} ref={register({ required: true })} id="age1" placeholder="Your Age"></input>
                                    {errors.age && <p style={{ color: "red" }}>Please Enter Your age</p>}
                                </div>
                                <div class="form-group">
                                    <label for="gender1"><b>Gender</b></label>
                                    <select className="form-control" name="gender" onChange={(e) => setGender(e.target.value)} ref={register({ required: true })} id="gender1">
                                        <option value="" disabled selected>Please Select</option>
                                        <option value="M">Male</option>
                                        <option value="F">Female</option>
                                        <option value="T">Transgender</option>

                                    </select>
                                    {errors.gender && <p style={{ color: "red" }}>Please select gender</p>}
                                </div>
                                <input type="hidden" name="country" id="countryId" value="IN" />
                                <div className="form-group">
                                    <label for="state">
                                        <b>State</b>
                                    </label>
                                    <select name="state" ref={register({ required: true })} onChange={(e) => setState(e.target.value)} className="states order-alpha form-control" id="stateId">
                                        <option value="" disabled selected>Select State</option>
                                    </select>
                                    {errors.state && <p style={{ color: "red" }}>Your State</p>}
                                </div>
                                <div className="form-group">
                                    <label for="city">
                                        <b>City</b>
                                    </label>
                                    <select name="city" ref={register({ required: true })} onChange={(e) => setCity(e.target.value)} className="cities order-alpha limit-pop-70000 form-control" id="cityId">
                                        <option value="" disabled selected>Select City</option>
                                    </select>
                                    {errors.city && <p style={{ color: "red" }}>Your City</p>}
                                </div>
                                <button type="submit" className="btn btn-warning">
                                    <b>Submit</b>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    
}


export default withRouter(PatientRegistrtation)