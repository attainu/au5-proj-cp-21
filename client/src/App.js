import React, { useState, useEffect } from 'react';
import Splash from './component/Splash'
import Register from './component/Landing page/Register'
import DoctorRegistration from './component/DoctorRegistration'
import PatientRegistration from './component/PatientRegistration'
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from './component/Dashboard';
import ForgotPassword from './component/Landing page/ForgetPassword';
import ChangePass from './component/Landing page/ChangePass';
import DocProtected from './component/DocProtected'
import PatientProtected from './component/PatProtected'
import SearchPage from './component/SearchPage'
import BookAppointment from './component/BookAppointment'
import Home from './component/Home'
import DocProfile from './component/DocProfile';
import DocBooking from './component/DocBooking';
// import VideoCall from './component/VideoCall1'
import Video from './component/videocall/Video'

function App() {
  const [timePassed, setTimepassed] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      setTimePassed();
    }, 2000);
  }, [])
  const setTimePassed = () => {
    setTimepassed(true)
  }
  if (!timePassed) {
    return <Splash />
  }
  else {
    return (
      <div>
        <BrowserRouter>
          <Switch>
           
            <Route exact path="/" component={Register} />
            <PatientProtected exact path="/home" component={Dashboard} />
            <PatientProtected exact path="/doctorprofile/:speciality" component={SearchPage} />
            <DocProtected exact path="/doc" component={DoctorRegistration} />
            <PatientProtected exact path="/patient" component={PatientRegistration} />
            <Route exact path="/dashboard" component={Home} />
            <DocProtected exact path="/profile" component={DocProfile} />
            <DocProtected exact path="/docbooking" component={DocBooking} />
            <Route exact path="/forgotpassword" component={ForgotPassword} />
            <Route path="/bookappointment" component={BookAppointment} />
            <Route path="/newpass" component={ChangePass} />
            <Route path='/videocall/:id' component={Video} />
           
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
