import React, { Component } from "react";
import Navbar from "./Landing page/Navbar";
import "../App.css";
import Speciality from '../speciality.json'
import { searchSpeciality} from '../actionCreators/action'
import {connect } from 'react-redux'
import { bindActionCreators } from "redux";
class Dashboard extends Component {

  handleSearch = (sp) => {
   
    this.props.searchSpeciality(sp)
   
    this.props.history.push('searchresults')
  }
  render() {
    // console.log(special)
    return (
      <div>
        <Navbar />
        <div className="container-fluid">
        <div className="row banner">
          <div className="main">
            <h3>Book Video Consultation With Your Doctor</h3>
            <br />
            <div class="form-group has-search">
              <span class="fa fa-search form-control-feedback"></span>
              <input type="text" class="form-control" placeholder="Search" />
            </div>
          </div>
        </div>
        <div className="row mt-5">
          {Speciality.map((sp)=>(
            <div className="col-md-4">
              <button onClick={()=>this.handleSearch(sp.speciality)} className="speciality">
                <img
                  src={sp.image}
                  alt="Cardiology"
                  width="50px"
                  height="50px"
                  className="float-left"
                />
                <span>{sp.speciality}</span>
              </button>
            </div>
           ) )}
         
        </div>
        </div>
      </div>
    );
  }
}


const mapStateToProps=(state)=>{
  return state
}
const mapDispatchToProps=(dispatch)=>{
  return bindActionCreators({searchSpeciality},dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps) (Dashboard);
