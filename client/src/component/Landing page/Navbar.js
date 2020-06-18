import React, { Component } from "react";

// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import "../../App.css";
// import axios from "axios";
import { withRouter } from "react-router-dom";
// ​
class Navbar extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    mobileno: "",
    gender: "",
    bio: "",
    speciality: "",
    hospital: "",
    Address: "",
    LanguageKnown: "",
    states: "",
    city: "",
    age:"",
    specialities: [
      "Pediatrician",
      "Obstetrician / Gynecologist",
      "Surgeon",
      "Psychiatrist",
      "Cardiologist",
      "Dermatologist",
      "Endocrinologist",
      "Gastroenterologist",
      "Nephrologist",
      "Ophthalmologist",
      "Pulmonologist",
      "Neurologist",
      "Radiologist",
      "Oncologist",
    ],
    hospitals: [
      "Monilek Hospital & Research Centre, Jaipur, Rajasthan",
      "Ranu Nursing Home, Jaipur, Rajasthan",
      "Satyam Hospital-Jaipur, Jaipur, Rajasthan ",
    ],
  };

  setEmail = (val) => {
    this.setState({
      email: val,
    });
  };
  // ​
  setPass = (val) => {
    this.setState({
      password: val,
    });
  };
  // ​
  setMob = (val) => {
    this.setState({
      mob: val,
    });
  };

  checkPass = (val) => {
    this.setState({
      cPass: val,
    });
  };

  //      signUp = (e) => {
  //         e.preventDefault()
  //         if (this.state.password === this.state.cPass) {
  //             let data = {
  //                 email: this.state.email,
  //                 mob: this.state.mob,
  //                 password: this.state.password
  //             }
  //             if (data.email !== "" && data.mob !== "" && data.password !== "") {
  //                 axios.post('/signup', data).then(
  //                     res => {
  //                         if (res.data) {
  //                             toast.success('SignUp successfully, Please Login', { position: toast.POSITION.BOTTOM_RIGHT, autoClose: 5000 })
  //                         } else {
  //                             if (res.data === false) {
  //                                 toast.error('User already exists', { position: toast.POSITION.BOTTOM_RIGHT, autoClose: 5000 })
  //                             } else {
  //                                 toast.error('Server Error, Try Again', { position: toast.POSITION.BOTTOM_RIGHT, autoClose: 5000 })
  //                             }
  //                         }
  //                    }
  //                 )
  // ​
  //                 console.log(data)
  //             } else {
  //                 toast.error('Please fill all fields', { position: toast.POSITION.BOTTOM_RIGHT, autoClose: 5000 })
  //             }
  // ​
  //         } else {
  //             toast.error('Password does not match', { position: toast.POSITION.BOTTOM_RIGHT, autoClose: 5000 })
  //         }
  //     }
  // ​
  //     loginEvent = (rootpath) => {
  // ​
  //         let data = {
  //             email: this.state.email,
  //             password: this.state.password
  //         }
  //         if (data.email !== "" && data.password !== "") {
  //             axios.post(rootpath, data).then(
  //                 res => {
  //                     localStorage.setItem('myAuth', res.data.token);
  //                     this.props.history.push("/userwelcome")
  //                 }
  //             )
  //         }else{
  //             toast.error('Please Fill all filelds', { position : toast.POSITION.BOTTOM_RIGHT, autoClose: 3000})
  //         }
  // ​
  //     }
  // ​
  // ​
  render() {
    return (
      <div className="row">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarTogglerDemo03"
              aria-controls="navbarTogglerDemo03"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <a className="navbar-brand ml-5" href="/userwelcome">
              {/* <img id="logo" src={logo} alt="logo"></img> */}
            </a>
            ​
            <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
              ​
              <button
                type="button"
                className="btn btn-warning mr-3"
                data-toggle="modal"
                data-target="#doctormodal"
              >
                <b>Register</b>
              </button>
              <button
                type="button"
                className="btn btn-warning mr-5"
                data-toggle="modal"
                data-target="#userLogin"
              >
                <b>Login</b>
              </button>
            </div>
          </nav>
        </div>
        {/* main modal */}
        <div
          className="modal fade"
          data-backdrop="false"
          id="doctormodal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLongTitle">
                  doctor
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <button
                  type="button"
                  className="btn btn-warning mr-3"
                  data-toggle="modal"
                  data-target="#doctorRegister"
                >
                  <b>As a doctor</b>
                </button>
                <button
                  type="button"
                  className="btn btn-warning mr-3"
                  data-toggle="modal"
                  data-target="#patientRegister"
                >
                  <b>As a patient</b>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Doctor register page */}
        <div
          className="modal fade"
          id="doctorRegister"
          tabindex="-1"
          data-backdrop="false"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLongTitle">
                  Sign up
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body1">
                <form>
                  <div className="form-group">
                    <label for="userName">
                      <b>Name</b>
                    </label>
                    <input
                      type="text"
                      name="name"
                      onChange={(e) => {
                        this.setState({ name: e.target.value });
                      }}
                      className="form-control"
                      id="userName"
                      aria-describedby="emailHelp"
                      placeholder="Enter name"
                    ></input>
                  </div>
                  <div className="form-group">
                    <label for="userEmail">
                      <b>Email address</b>
                    </label>
                    <input
                      type="email"
                      name="email"
                      onChange={(e) => {
                        this.setState({ email: e.target.value });
                      }}
                      className="form-control"
                      id="userEmail"
                      aria-describedby="emailHelp"
                      placeholder="Enter email"
                    ></input>
                  </div>
                  <div className="form-group">
                    <label for="mobNum">
                      <b>Mobile Number</b>
                    </label>
                    <input
                      className="form-control"
                      onChange={(e) => {
                        this.setState({ mobileno: e.target.value });
                      }}
                      id="mobNum"
                      type="number"
                      placeholder="Mobile number"
                    ></input>
                  </div>{" "}
                  <div className="form-group">
                    <label for="Bio">
                      <b>Bio</b>
                    </label>
                    <input
                      type="text"
                      name="bio"
                      onChange={(e) => {
                        this.setState({ bio: e.target.value });
                      }}
                      className="form-control"
                      id="Bio"
                      placeholder="about yourself"
                    ></input>
                  </div>
                  <div class="form-group">
                    <label for="gender">
                      <b>Gender</b>
                    </label>
                    <select
                      class="form-control"
                      onChange={(e) =>
                        this.setState({ gender: e.target.value })
                      }
                      id="gender"
                    >
                      <option>Please Select</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                  </div>
                  <div class="form-group">
                    <label for="speciality">
                      <b>Speciality</b>
                    </label>
                    <select
                      class="form-control"
                      id="speciality"
                      onChange={(e) =>
                        this.setState({ speciality: e.target.value })
                      }
                    >
                      <option>Please select</option>
                      {this.state.specialities.map((sp) => (
                        <option key={sp}>{sp}</option>
                      ))}
                    </select>
                  </div>
                  <div class="form-group">
                    <label for="hospital">
                      <b>Hospital</b>
                    </label>
                    <select
                      class="form-control"
                      id="speciality"
                      onChange={(e) =>
                        this.setState({ hospital: e.target.value })
                      }
                    >
                      <option>Please select</option>
                      {this.state.hospitals.map((hs) => (
                        <option key={hs}>{hs}</option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group">
                    <label for="address">
                      <b>Address</b>
                    </label>
                    <textarea
                      onChange={(e) => {
                        this.setState({ address: e.target.value });
                      }}
                      className="form-control"
                      id="address"
                      placeholder="enter address"
                    ></textarea>
                  </div>
                  <div className="form-group">
                    <label for="langauge">
                      <b>Language Known</b>
                    </label>
                    <input
                      type="text"
                      onChange={(e) => {
                        this.setState({ langauge: e.target.value });
                      }}
                      className="form-control"
                      id="langauge"
                      placeholder="enter langauge"
                    ></input>
                  </div>
                  <div className="form-group">
                    <label for="state">
                      <b>State</b>
                    </label>
                    <select
                      class="form-control"
                      id="state"
                      onChange={(e) =>
                        this.setState({ states: e.target.value })
                      }
                    >
                      <option>Please select</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label for="city">
                      <b>City</b>
                    </label>
                    <select
                      class="form-control"
                      id="city"
                      onChange={(e) => this.setState({ city: e.target.value })}
                    >
                      <option>Please select</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label for="exampleInputPassword1">
                      <b>Password</b>
                    </label>
                    <input
                      type="password"
                      onChange={(e) => {
                        this.setPass(e.target.value);
                      }}
                      name="password"
                      className="form-control"
                      id="exampleInputPassword1"
                      placeholder="Password"
                    ></input>
                  </div>
                  <button
                    type="button"
                    onClick={(e) => {
                      this.signUp(e);
                    }}
                    className="btn btn-warning"
                  >
                    <b>Submit</b>
                  </button>
                </form>
              </div>
              <div className="modal-footer">
                <h6>
                  <b>Already have an Account</b>
                </h6>
                <button
                  type="button"
                  className="btn btn-warning"
                  data-toggle="modal"
                  data-target="#userLogin"
                  data-dismiss="modal"
                >
                  <b>Login</b>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* ​patient register modal */}
        <div
          className="modal fade"
          id="patientRegister"
          tabindex="-1"
          data-backdrop="false"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLongTitle">
                  Sign up
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body1">
                <form>
                  <div className="form-group">
                    <label for="userName">
                      <b>Name</b>
                    </label>
                    <input
                      type="text"
                      name="name"
                      onChange={(e) => {
                        this.setState({ name: e.target.value });
                      }}
                      className="form-control"
                      id="userName"
                      aria-describedby="emailHelp"
                      placeholder="Enter name"
                    ></input>
                  </div>
                  <div className="form-group">
                    <label for="userEmail">
                      <b>Email address</b>
                    </label>
                    <input
                      type="email"
                      name="email"
                      onChange={(e) => {
                        this.setState({ email: e.target.value });
                      }}
                      className="form-control"
                      id="userEmail"
                      aria-describedby="emailHelp"
                      placeholder="Enter email"
                    ></input>
                  </div>
                  <div className="form-group">
                    <label for="mobNum">
                      <b>Mobile Number</b>
                    </label>
                    <input
                      className="form-control"
                      onChange={(e) => {
                        this.setState({ mobileno: e.target.value });
                      }}
                      id="mobNum"
                      type="text"
                      placeholder="Mobile number"
                    ></input>
                  </div>
                  <div class="form-group">
                    <label for="gender">
                      <b>Gender</b>
                    </label>
                    <select
                      class="form-control"
                      onChange={(e) =>
                        this.setState({ gender: e.target.value })
                      }
                      id="gender"
                    >
                      <option>Please Select</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label for="age">
                      <b> Age</b>
                    </label>
                    <input
                      type="number"
                      onChange={(e) => {
                        this.setState({ age: e.target.value });
                      }}
                      className="form-control"
                      id="age"
                      placeholder="enter age"
                    ></input>
                  </div>
                  <div className="form-group">
                    <label for="exampleInputPassword1">
                      <b>Password</b>
                    </label>
                    <input
                      type="password"
                      onChange={(e) => {
                        this.setState({ password: e.target.value });
                      }}
                      name="password"
                      className="form-control"
                      id="exampleInputPassword1"
                      placeholder="Password"
                    ></input>
                  </div>
                  <button
                    type="button"
                    onClick={(e) => {
                      this.signUp(e);
                    }}
                    className="btn btn-warning"
                  >
                    <b>Submit</b>
                  </button>
                </form>
              </div>
              <div className="modal-footer">
                <h6>
                  <b>Already have an Account</b>
                </h6>
                <button
                  type="button"
                  className="btn btn-warning"
                  data-toggle="modal"
                  data-target="#userLogin"
                  data-dismiss="modal"
                >
                  <b>Login</b>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Login Modal */}
        <div
          className="modal fade"
          data-backdrop="false"
          id="userLogin"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLongTitle">
                  Login
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="form-group">
                    <label for="userLoginEmail">
                      <b>Email address</b>
                    </label>
                    <input
                      type="email"
                      onChange={(e) => {
                        this.setEmail(e.target.value);
                      }}
                      className="form-control"
                      id="userLoginEmail"
                      aria-describedby="emailHelp"
                      placeholder="Enter email"
                    ></input>
                  </div>
                  <div className="form-group">
                    <label for="userLoginPassword">
                      <b>Password</b>
                    </label>
                    <input
                      type="password"
                      onChange={(e) => {
                        this.setPass(e.target.value);
                      }}
                      className="form-control"
                      id="userLoginPassward"
                      placeholder="Password"
                    ></input>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      this.loginEvent();
                    }}
                    className="btn btn-warning"
                  >
                    <b>Submit</b>
                  </button>
                </form>
              </div>
              <div className="modal-footer">
                <h6>
                  <b>New to this app</b>
                </h6>
                <button
                  type="button"
                  className="btn btn-warning"
                  data-toggle="modal"
                  data-target="#userSignup"
                  data-dismiss="modal"
                >
                  <b>SignUp</b>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ​Sign up modal */}
        {/* <div
          className="modal fade"
          id="userSignup"
          tabindex="-1"
          data-backdrop="false"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLongTitle">
                  Sign up
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="form-group">
                    <label for="userEmail">
                      <b>Email address</b>
                    </label>
                    <input
                      type="email"
                      name="email"
                      onChange={(e) => {
                        this.setEmail(e.target.value);
                      }}
                      className="form-control"
                      id="userEmail"
                      aria-describedby="emailHelp"
                      placeholder="Enter email"
                    ></input>
                  </div>
                  <div className="form-group">
                    <label for="mobNum">
                      <b>Mobile Number</b>
                    </label>
                    <input
                      className="form-control"
                      onChange={(e) => {
                        this.setMob(e.target.value);
                      }}
                      id="mobNum"
                      type="text"
                      placeholder="Mobile number"
                    ></input>
                  </div>
                  <div className="form-group">
                    <label for="exampleInputPassword1">
                      <b>Password</b>
                    </label>
                    <input
                      type="password"
                      onChange={(e) => {
                        this.setPass(e.target.value);
                      }}
                      name="password"
                      className="form-control"
                      id="exampleInputPassword1"
                      placeholder="Password"
                    ></input>
                  </div>
                  <div className="form-group">
                    <label for="exampleInputPassword1">
                      <b>Confirm Password</b>
                    </label>
                    <input
                      type="password"
                      onChange={(e) => {
                        this.checkPass(e.target.value);
                      }}
                      className="form-control"
                      id="exampleInputPassword1"
                      placeholder="Confirm Password"
                    ></input>
                  </div>
                  <button
                    type="button"
                    onClick={(e) => {
                      this.signUp(e);
                    }}
                    className="btn btn-warning"
                  >
                    <b>Submit</b>
                  </button>
                </form>
              </div>
              <div className="modal-footer">
                <h6>
                  <b>Already have an Account</b>
                </h6>
                <button
                  type="button"
                  className="btn btn-warning"
                  data-toggle="modal"
                  data-target="#userLogin"
                  data-dismiss="modal"
                >
                  <b>Login</b>
                </button>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    );
  }
}

export default withRouter(Navbar);
