import React from 'react'
import { connect } from 'react-redux'
import Navbar from './Landing page/Navbar'
import Footer from './Landing page/Footer'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { bindActionCreators } from "redux";
import { withRouter } from 'react-router-dom'
import { docSlot, bookSlot,selectDoctor } from '../actionCreators/doctorAction'
import axios from 'axios'

class BookAppointment extends React.Component {
   constructor(props){
       super(props)
       let url = window.location.pathname
        let urlId =  url.split('/');
        this.props.selectDoctor(urlId[2])
       let data_1 = new Date()
       this.props.docSlot(data_1.toLocaleDateString(), urlId[2])
   }
    
    
    state = {
        date: new Date(),
        slot: "",
        name: "",
        email: "",
        mobile: "",
        gender: "",
        age: "",
        state: "",
        city: ""
    }

    

    onChange = date => {
        this.setState({ date },
            () => {
                
                this.props.docSlot(this.state.date.toLocaleDateString(), this.props.myDoc._id)
            })
    }
    sendSlot =  (selectedSlot) => {
        
    let token = localStorage.getItem("patientAuth");
    let request =  axios({
        method: "GET",
        url: "http://localhost:3010/getuser",
        headers: {
            "x-auth-token": token
        },
    });
    request.then( (res) => {
        this.setState({
            slot: selectedSlot,
            name: res.data.name,
            email: res.data.email,
            mobile: res.data.mobile,
            gender: res.data.gender,
            age: res.data.age,
            state: res.data.state,
            city: res.data.city
        })
        
        bookSlot(this.props.myDoc._id, this.state)
        this.props.docSlot(this.state.date, this.props.myDoc._id)
         
    })

        
    }
    render() {
        
        return (
            <div>
                <Navbar />
            
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-2">

                            <img className="rounded" src={this.props.myDoc.image} style={{ width: "100px", height: "100px" }} alt="doc"></img>

                        </div>
                        <div className="col-md-8">
                            Name:  <span>{this.props.myDoc.name}</span><br/>
                            <span>Qualification: &nbsp;{this.props.myDoc.qualification}</span><br/>
                            <span> Spaeciality: &nbsp;{this.props.myDoc.specialisation}</span><br />
                            <span>City: &nbsp;{this.props.myDoc.city}</span><br />



                            
                           
                        </div>
                    </div>
  
                    <hr></hr>
                    <h5 className="text-center">Book Appointment</h5>
                    <hr></hr>
                    <div className="row">
                        <div className="col-4">
                            <Calendar onChange={this.onChange} value={this.state.date} minDate={new Date()} locale />
                        </div>
                        <div className="col-6">
                            <div className="row">
                                <div className="col-6">
                                    <p className="text-center"><b>Morning Slot</b></p>

                                    <p className="text-center" key="b_1">{
                                        (this.props.slot.slot_1.status === 'false') ? <button type="button" value="slot_1" onClick={(e) => { this.sendSlot(e.currentTarget.value) }} class="btn btn-outline-success mb-3" ><b>10:00AM - 10:30AM</b></button> : <button type="button" class="btn btn-outline-danger mb-3" disabled><b>10:00AM - 10:30AM</b></button>
                                    }</p>

                                    <p className="text-center" key="b_2">{
                                        (this.props.slot.slot_2.status === 'false') ? <button type="button" value="slot_2" onClick={(e) => { this.sendSlot(e.currentTarget.value) }} class="btn btn-outline-success mb-3" ><b>11:00AM - 11:30AM</b></button> : <button type="button" class="btn btn-outline-danger mb-3" disabled><b>11:00AM - 11:30AM</b></button>
                                    }</p>

                                    <p className="text-center" key="b_3">{
                                        (this.props.slot.slot_3.status === 'false') ? <button type="button" value="slot_3" onClick={(e) => { this.sendSlot(e.currentTarget.value) }} class="btn btn-outline-success mb-3" ><b>12:00AM - 12:30PM</b></button> : <button type="button" class="btn btn-outline-danger mb-3" disabled><b>12:00AM - 12:30PM</b></button>
                                    }</p>


                                </div>
                                <div className="col-6">
                                    <p className="text-center"><b>Evening Slot</b></p>
                                    <p className="text-center" key="b_4">{
                                        (this.props.slot.slot_4.status === 'false') ? <button type="button" value="slot_4" onClick={(e) => { this.sendSlot(e.currentTarget.value) }} class="btn btn-outline-success mb-3" ><b>4:00PM - 4:30PM</b></button> : <button type="button" class="btn btn-outline-danger mb-3" disabled><b>4:00PM - 4:30PM</b></button>
                                    }</p>

                                    <p className="text-center" key="b_5">{
                                        (this.props.slot.slot_5.status === 'false') ? <button type="button" value="slot_5" onClick={(e) => { this.sendSlot(e.currentTarget.value) }} class="btn btn-outline-success mb-3" ><b>5:00PM - 5:30PM</b></button> : <button type="button" class="btn btn-outline-danger mb-3" disabled><b>5:00PM - 5:30PM</b></button>
                                    }</p>

                                    <p className="text-center" key="b_6">{
                                        (this.props.slot.slot_6.status === 'false') ? <button type="button" value="slot_6" onClick={(e) => { this.sendSlot(e.currentTarget.value) }} class="btn btn-outline-success mb-3" ><b>6:00PM - 6:30PM</b></button> : <button type="button" class="btn btn-outline-danger mb-3" disabled><b>6:00PM - 6:30PM</b></button>
                                    }</p>


                                </div>
                            </div>


                        </div>
                    </div>
                </div>
                <br/>
               <div className="mt-5">
                   
                <Footer/>
               </div>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log("asdfhh", state.doctor.myDoc)
    return {
        myDoc: state.doctor.selecteddoctor,
        slot: state.doctor.docSlot
    }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ docSlot, selectDoctor }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(BookAppointment))