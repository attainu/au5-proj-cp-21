import React from 'react';
import Navbar from './Navbar'
import speciality from '../../speciality.json'

class DoctorRegistration extends React.Component {
    state = {
        name: "",
        gender: "",
        bio: "",
        hospital: "",
        address: "",
        language: "",
        states: "",
        city: ""
    };

 
    render() {
        return (
            <div>
                <Navbar />
                <div className="container">
                    <div className="row">
                        <div className="col-5">

                        </div>
                        <div className="col-7">
                            <h2>Welcome to Doctor Page</h2>
                            <form>
                                <div className="form-group">
                                    <label for="userName">
                                        <b>Name</b>
                                    </label>
                                    <input type="text" name="name" onChange={(e) => { this.setState({ name: e.target.value }); }} className="form-control" id="userName" aria-describedby="emailHelp" placeholder="Enter name"></input>
                                </div>
                                <div className="form-group">
                                    <label for="Bio">
                                        <b>Bio</b>
                                    </label>
                                    <input type="text" name="bio" onChange={(e) => { this.setState({ bio: e.target.value }); }} className="form-control" id="Bio" placeholder="About yourself"></input>
                                </div>
                                <div class="form-group">
                                    <label for="gender">
                                        <b>Gender</b>
                                    </label>
                                    <select className="form-control" onChange={(e) => this.setState({ gender: e.target.value })} id="gender">
                                        <option>Please Select</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label for="speciality">
                                        <b>Speciality</b>
                                    </label>
                                    <select className="form-control" id="speciality" >
                                        <option>Please select</option>
                                        {speciality.map((sp) => (
                                            <option key={sp.speciality} value={sp.speciality}>{sp.speciality}</option>
                                        ))}
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label for="hospital">
                                        <b>Hospital</b>
                                    </label>
                                    <input type="text" className="form-control" id="hospital" placeholder="Hospital Name"></input>
                                </div>
                                <div className="form-group">
                                    <label for="address">
                                        <b>Address</b>
                                    </label>
                                    <textarea onChange={(e) => { this.setState({ address: e.target.value }); }} className="form-control" id="address" placeholder="enter address"></textarea>
                                </div>
                                <div className="form-group">
                                    <label for="langauge">
                                        <b>Language</b>
                                    </label>
                                    <select className="form-control" onChange={(e) => this.setState({ language: e.target.value })} id="language">
                                        <option>Please Select Your Language</option>
                                        <option value="english">English</option>
                                        <option value="hindi">Hindi</option>
                                        <option value="hindi">Kannada</option>
                                    </select>
                                </div>
                                <input type="hidden" name="country" id="countryId" value="IN"/>
                                <div className="form-group">
                                    <label for="state">
                                        <b>State</b>
                                    </label>
                                    <select name="state" className="states order-alpha form-control" id="stateId">
                                        <option value="">Select State</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label for="city">
                                        <b>City</b>
                                    </label>
                                    <select name="city" className="cities order-alpha limit-pop-70000 form-control" id="cityId">
                                        <option value="">Select City</option>
                                    </select>
                                </div>

                                <button type="button" className="btn btn-warning">
                                    <b>Submit</b>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default DoctorRegistration