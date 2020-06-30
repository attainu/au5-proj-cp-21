import React from 'react';
import Splash from './component/Splash'
import Register from './component/Landing page/Register'
import DoctorRegistration from './component/Landing page/DoctorRegistration'
import PatientRegistration from './component/Landing page/PatientRegistration'
import './App.css';
import { BrowserRouter, Route,Switch } from 'react-router-dom';
import Dashboard from './component/Dashboard';
import ForgotPassword from './component/Landing page/ForgetPassword';
import ChangePass from './component/Landing page/ChangePass';
import DocProtected from './component/DocProtected'
import PatientProtected from './component/PatProtected'
import SearchPage from './component/SearchPage'
import BookAppointment from  './component/BookAppointment'
import Home from './component/Home'
import DocProfile from './component/DocProfile';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          {/* <Splash/> */}
          <Route exact path="/" component={Register} />
          <PatientProtected exact path="/home" component={Dashboard} />
          <PatientProtected exact path="/doctorprofile/:speciality" component={SearchPage}/>
          <DocProtected exact path="/doc" component={DoctorRegistration} />
          <PatientProtected exact path="/patient" component={PatientRegistration} />
          <Route exact path="/dashboard" component={Home}/>
          <DocProtected exact path="/profile" component={DocProfile}/>
          <Route exact path="/forgotpassword" component={ForgotPassword} />
          <Route exact path="/bookappointment/:id" component={BookAppointment} />
          <Route  path="/newpass" component={ChangePass} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
