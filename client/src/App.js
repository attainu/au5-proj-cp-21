import React from 'react';
import Splash from './component/Splash'
import Register from './component/Landing page/Register'
import './App.css';
import { BrowserRouter, Route,Switch } from 'react-router-dom';
import Dashboard from './component/Dashboard';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          {/* <Splash/> */}
          <Route exact path="/" component={Register} />
          <Route exact path="/dashboard" component={Dashboard} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
