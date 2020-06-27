import React from 'react'
import { connect } from 'react-redux'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { bindActionCreators } from "redux";
import { withRouter} from 'react-router-dom'
import { docSlot } from '../actionCreators/doctorAction'


class BookAppointment extends React.Component {
    state = {
        date: new Date()
    }
    onChange = date => {
        this.setState({ date },
            () =>{
                this.props.docSlot(this.state.date,this.props.myDoc._id)
            })

    }
    render() {
        return (
            <div>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-4">
                            <img src={this.props.myDoc.image} alt="Doc Image"></img>
                            <h3>{this.props.myDoc.name}</h3>
                        </div>
                        <div className="col-6">
                              <Calendar onChange={this.onChange} value={this.state.date} minDate={new Date()}  locale />
                               
                              
                        </div>
                        <div className="col-2">

                        </div>
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

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        myDoc: state.doctor.selecteddoctor
    }
}
const mapDispatchToProps = (dispatch)=>{
    return bindActionCreators({docSlot},dispatch)
  }

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(BookAppointment))