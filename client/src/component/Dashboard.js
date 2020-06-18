import React, { Component } from "react";
import Navbar from "./Landing page/Navbar";
import "../App.css";
class Dashboard extends Component {
  render() {
    return (
      <div className="container-fluid bg-white fixed">
        <Navbar />
        <div className="row banner ">
          <div className="main">
            <h3>Book Video Consultation With Your Doctor</h3>
            <br />
            <div class="form-group has-search">
              <span class="fa fa-search form-control-feedback"></span>
              <input type="text" class="form-control" placeholder="Search" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
