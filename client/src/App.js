import React from 'react';
import Splash from './component/Splash'
import Register from './component/Landing page/Register'
import DoctorRegistration from './component/Landing page/DoctorRegistration'
import PatientRegistration from './component/Landing page/PatientRegistration'
import './App.css';
import { BrowserRouter, Route,Switch } from 'react-router-dom';
import Dashboard from './component/Dashboard';
import ForgotPassword from './component/Landing page/ForgetPassword';
import SearchPage from './component/SearchPage'
function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          {/* <Splash/> */}
          <Route exact path="/" component={Register} />
          <Route exact path="/home" component={Dashboard} />
          <Route exact path="/doctorprofile/:speciality" component={SearchPage}/>
          <Route exact path="/doc" component={DoctorRegistration} />
          <Route exact path="/patient" component={PatientRegistration} />
          <Route exact path="/forgotpassword" component={ForgotPassword} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
