import React  from 'react';
import Navbar from './Navbar'
import speciality from '../../speciality.json'
import { useForm } from 'react-hook-form'

function DoctorRegistration() {
const { register, handleSubmit, errors } = useForm();

const docregister = (data) => {
    console.log("doc data",data)
}
    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col-5">

                    </div>
                    <div className="col-7">
                        <h2>Welcome to Doctor Page</h2>
                        <form onSubmit={handleSubmit(docregister)}>
                            <div className="form-group">
                                <label for="userName">
                                    <b>Name</b>
                                </label>
                                <input type="text" name="name" className="form-control" ref={register({required : true})} id="userName" aria-describedby="emailHelp" placeholder="Enter name"></input>
                                 {errors.name && <p style={{color : "red"}}>Please Enter Your Name</p>}
                            </div>
                            <div className="form-group">
                                <label for="age1">
                                    <b>Age</b>
                                </label>
                                <input type="text" name="age" className="form-control" ref={register({required : true})} id="age1" placeholder="Your Age"></input>
                                 {errors.age && <p style={{color : "red"}}>Please Enter Your age</p>}
                            </div>
                            <div className="form-group">
                                <label for="image1">
                                    <b>Select Your Image</b>
                                </label>
                                <input type="file" name="image" className="form-control" ref={register({required : true})} id="image1"></input>
                                 {errors.image && <p style={{color : "red"}}>Share your Image</p>}
                            </div>
                            
                            <div class="form-group">
                                <label for="gender1"><b>Gender</b></label>
                                <select className="form-control" name="gender" ref={register({required : true})}  id="gender1">
                                    <option value="" disabled selected>Please Select</option>
                                    <option value="M">Male</option>
                                    <option value="F">Female</option>
                                </select>
                                {errors.gender && <p style={{color : "red"}}>Please select gender</p>}
                            </div>
                            <div className="form-group">
                                <label for="education1">
                                    <b>Qualification</b>
                                </label>
                                <input type="text" name="education" className="form-control" ref={register({required : true})} id="education1" placeholder="Qualification"></input>
                                {errors.education && <p style={{color : "red"}}>Please mention Your Qualification.</p>}
                            </div>
                            <div className="form-group">
                                <label for="Bio">
                                    <b>Bio</b>
                                </label>
                                <input type="text" name="bio" className="form-control" ref={register({required : true})} id="Bio" placeholder="About yourself"></input>
                                {errors.bio && <p style={{color : "red"}}>We want to know about you.</p>}
                            </div>
                            
                            <div class="form-group">
                                <label for="speciality">
                                    <b>Specialisation</b>
                                </label>
                                <select className="form-control" name="specialisation" ref={register({ required : true})} id="speciality" >
                                    <option value="" disabled selected>Please select</option>
                                    {speciality.map((sp) => (
                                        <option key={sp.speciality} value={sp.speciality}>{sp.speciality}</option>
                                    ))}
                                </select>
                                {errors.specialisation && <p style={{color :"red"}}>Please select your speciality.</p>}
                            </div>
                            <div class="form-group">
                                <label for="License">
                                    <b>License No</b>
                                </label>
                                <input type="text" className="form-control" name="LicenseNo" ref={register({ required : true})} id="LicenseNo" placeholder="License No."></input>
                                {errors.LicenseNo && <p style={{color :"red"}}>Please mention Your license No.</p>}
                            </div>
                            <div class="form-group">
                                <label for="hospital">
                                    <b>Hospital</b>
                                </label>
                                <input type="text" className="form-control" name="hospital" ref={register({ required : true})} id="hospital" placeholder="Hospital Name"></input>
                                {errors.hospital && <p style={{color :"red"}}>Please mention hospital name.</p>}
                            </div>
                            <div className="form-group">
                                <label for="address">
                                    <b>Address</b>
                                </label>
                                <textarea className="form-control" name="address" ref={register({ required :true})} id="address" placeholder="Enter address"></textarea>
                                {errors.address && <p style={{color :"red"}}>Please mention clinic address</p>}
                            </div>
                            <div className="form-group">
                                <label for="langauge1">
                                    <b>Language</b>
                                </label>
                                <select className="form-control" name="language" ref={register({ required :true})} id="language1">
                                    <option value="" disabled selected>Please Select Your Language</option>
                                    <option value="english">English</option>
                                    <option value="hindi">Hindi</option>
                                    <option value="hindi">Kannada</option>
                                </select>
                                {errors.language && <p style={{color :"red"}}>Your language</p>}
                            </div>
                            <input type="hidden" name="country" id="countryId" value="IN" />
                            <div className="form-group">
                                <label for="state">
                                    <b>State</b>
                                </label>
                                <select name="state" ref={register({required : true})} className="states order-alpha form-control" id="stateId">
                                    <option value="" disabled selected>Select State</option>
                                </select>
                                {errors.state && <p style={{color :"red"}}>Your State</p>}
                            </div>
                            <div className="form-group">
                                <label for="city">
                                    <b>City</b>
                                </label>
                                <select name="city" ref={register({required : true})} className="cities order-alpha limit-pop-70000 form-control" id="cityId">
                                    <option value="" disabled selected>Select City</option>
                                </select>
                                {errors.city && <p style={{color :"red"}}>Your City</p>}
                            </div>
                            <div className="form-group">
                                <label for="fees">
                                    <b>Fee</b>
                                </label>
                                <input type="text" name="fees" className="form-control" ref={register({required : true})} id="fees" placeholder="How much You Charge"></input>
                                 {errors.fees && <p style={{color : "red"}}>How much you charge?</p>}
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


export default DoctorRegistration