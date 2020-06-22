import React from 'react';
import Navbar from './Navbar'

class PatientRegistrtation extends React.Component {
    state = {
        name: "",
        gender: "",
        age: ""
    };
    render() {
        return (
            <div>
                <Navbar />
                <div className="container">
                    <div className="row">
                        <div className="col-5"></div>
                        <div className="col-7">
                            <form>
                                <div className="form-group">
                                    <label for="userName">
                                        <b>Name</b>
                                    </label>
                                    <input type="text" name="name" onChange={(e) => { this.setState({ name: e.target.value }); }} className="form-control" id="userName" aria-describedby="emailHelp" placeholder="Enter name"></input>
                                </div>
                                <div class="form-group">
                                    <label for="gender">
                                        <b>Gender</b>
                                    </label>
                                    <select class="form-control" onChange={(e) => this.setState({ gender: e.target.value })} id="gender">
                                        <option>Please Select</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label for="age">
                                        <b> Age</b>
                                    </label>
                                    <input type="text" onChange={(e) => { this.setState({ age: e.target.value }); }} className="form-control" id="age" placeholder="Enter Age"></input>
                                </div>
                                <button type="button" onClick={(e) => { this.patientsubmit(e); }} className="btn btn-warning">
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


export default PatientRegistrtation