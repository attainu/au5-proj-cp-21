import React, { Component } from 'react'
import { connect } from 'react-redux'
import Navbar from './Landing page/Navbar'
import {selectDoctor} from '../actionCreators/doctorAction'

class SearchPage extends Component {
      render() {
            // console.log(this.props.doctor.search);'
            return (
                  <div>
                        <Navbar />
                        <div className="container-fluid mt-5">
                              <div className="row">
                                    {
                                          this.props.doctor.search.map((doc, index) => (
                                                <div className="col-md-4">
                                                      <div className="card shadow" style={{ width: "30rem" }}>
                                                            <div class="card-body">
                                                                  <div className="row" key={index}>
                                                                        <div className="col-md-3">
                                                                              <img className="rounded-circle" src={doc.image} alt="" width="70" height="70" />
                                                                        </div>
                                                                        <div className="col-md-8">
                                                                              <h5 className="card-title">{doc.name}</h5>
                                                                              <h6 className="card-subtitle mb-2 text-muted">{doc.education}</h6>
                                                                              <p className="card-subtitle">{doc.specialisation}</p>
                                                                              <p className="card-text"><span className="text-muted">License No</span>:{doc.LicenseNo}<br />
                                                                                    <span className="text-muted">Langauge</span>:{doc.langauge}<br />
                                                                                    <span className="text-muted">Hospital</span>:{doc.hospital}</p>

                                                                              <button className="btn btn-outline-success" style={{ borderRadius: 20 }} value={doc._id} onClick={(e) => {selectDoctor(e.target.value)}}>Book Appointment</button>

                                                                        </div>
                                                                  </div>


                                                            </div>
                                                      </div><br />
                                                </div>
                                          ))
                                    }
                              </div>

                        </div>
                  </div>


            )
      }
}


const mapStateToProps = (state) => {
      return state
}
// const mapDispatchToProps = (dispatch)=>{
//       return 
// }

export default connect(mapStateToProps)(SearchPage)