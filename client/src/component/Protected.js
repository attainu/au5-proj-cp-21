import React from "react";
import { Route, Redirect } from "react-router-dom";

const Protected = ({ component: Cmp, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      localStorage.getItem("doctorAuth" ) ||  localStorage.getItem("PatientAuth" )? <Cmp {...props} /> : (<Redirect to="/" />) 
    }
  />
);

export default Protected
