import React from 'react'
import { connect } from 'react-redux'
import Navbar from './Landing page/Navbar'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { bindActionCreators } from "redux";
import { withRouter } from 'react-router-dom'
import { docSlot,bookSlot } from '../actionCreators/doctorAction'


class BookAppointment extends React.Component {
    componentDidUpdate(){
        
        this.props.docSlot(this.state.date, this.props.myDoc._id)
    }
    state = {
        date: new Date(),
        slot: ""
        }
    onChange = date => {
        this.setState({ date },
            () => {
                this.props.docSlot(this.state.date, this.props.myDoc._id)
            })
    }
    sendSlot = async  (selectedSlot) =>{
        console.log(selectedSlot)
        await this.setState({
            slot : selectedSlot
        })
       await bookSlot(this.state.date, this.props.myDoc._id, this.state.slot)    
    }
    render() {
        return (
            <div>
                <Navbar />
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-12">

                            <img src={this.props.myDoc.image} style={{ width: "100px", height: "100px" }} alt="Doc Image"></img>

                            {/*  
                        electeddoctor:
LicenseNo: "8930"
address: "sardarpura"
age: "44"
appointments: []
bio: "I belives that once you start being more aware of your thoughts and actions, you will start appreciating life in a new way. This is why he specializes in depression, mood disorders, sexual disorders and anxiety disorders, because he feels that every person is capable of bringing about a change from within. His process is supportive, but aimed at direct interaction to help the patient bring about a visible change in himself or herself."
city: "channai"
email: "prathmeshkulkarni12@gmail.com"
fees: "300"
gender: "male"
hospital: "Apollo Hospital chennai"
image: "https://res.cloudinary.com/dsmr18nsi/image/upload/v1592757923/doctors%20images/14_i3lfeh.jpg"
mobile: "9777997554"
name: "Dr. Prathamesh Kulkarni"
password: "123456789"
qualification: "MCH (Cardiology Thoracic & Vascular Surgery)"
specialisation: "Cardiology"
state: "Tamilnadu"
_id: "5ef0d7236b3f7f039c3c9f15"

 */}
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
                                        (this.props.slot.slot_1 === 'false') ? <button type="button" value="slot_1" onClick={(e)=>{this.sendSlot(e.currentTarget.value)}} class="btn btn-outline-success mb-3" ><b>10:00AM - 10:30AM</b></button> : <button type="button" class="btn btn-outline-danger mb-3" disabled><b>10:00AM - 10:30AM</b></button>
                                    }</p>

                                    <p className="text-center" key="b_2">{
                                        (this.props.slot.slot_2 === 'false') ? <button type="button" value="slot_2" onClick={(e)=>{this.sendSlot(e.currentTarget.value)}} class="btn btn-outline-success mb-3" ><b>11:00AM - 11:30AM</b></button> : <button type="button" class="btn btn-outline-danger mb-3" disabled><b>11:00AM - 11:30Am</b></button>
                                    }</p>

                                    <p className="text-center" key="b_3">{
                                        (this.props.slot.slot_3 === 'false') ? <button type="button" value="slot_3" onClick={(e)=>{this.sendSlot(e.currentTarget.value)}} class="btn btn-outline-success mb-3" ><b>12:00AM - 12:30PM</b></button> : <button type="button" class="btn btn-outline-danger mb-3" disabled><b>12:00AM - 12:30PM</b></button>
                                    }</p>
                                    

                                </div>
                                <div className="col-6">
                                    <p className="text-center"><b>Evening Slot</b></p>
                                    <p className="text-center" key="b_4">{
                                        (this.props.slot.slot_4 === 'false') ? <button type="button" value="slot_4" onClick={(e)=>{this.sendSlot(e.currentTarget.value)}} class="btn btn-outline-success mb-3" ><b>4:00PM - 4:30PM</b></button> : <button type="button" class="btn btn-outline-danger mb-3" disabled><b>4:00PM - 4:30PM</b></button>
                                    }</p>

                                    <p className="text-center" key="b_5">{
                                        (this.props.slot.slot_5 === 'false') ? <button type="button" value="slot_5" onClick={(e)=>{this.sendSlot(e.currentTarget.value)}} class="btn btn-outline-success mb-3" ><b>5:00PM - 5:30PM</b></button> : <button type="button" class="btn btn-outline-danger mb-3" disabled><b>5:00PM - 5:30PM</b></button>
                                    }</p>

                                    <p className="text-center" key="b_6">{
                                        (this.props.slot.slot_6 === 'false') ? <button type="button" value="slot_6" onClick={(e)=>{this.sendSlot(e.currentTarget.value)}} class="btn btn-outline-success mb-3" ><b>6:00PM - 6:30PM</b></button> : <button type="button" class="btn btn-outline-danger mb-3" disabled><b>6:00PM - 6:30PM</b></button>
                                    }</p>
                                    

                                </div>
                            </div>


                        </div>
                    </div>
                </div>

                
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log("asdfhh",state.doctor.docSlot)
    return {
        myDoc: state.doctor.selecteddoctor,
        slot : state.doctor.docSlot
    }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ docSlot }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(BookAppointment))