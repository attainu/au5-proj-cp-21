import React from 'react'
import { connect } from 'react-redux'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';



import Paper from '@material-ui/core/Paper';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
    Scheduler, 
    DayView,
    Appointments,
} from '@devexpress/dx-react-scheduler-material-ui';

const currentDate = new Date();
const schedulerData = [
    { startDate: '2018-11-01T09:45', endDate: '2018-11-01T11:00', title: 'Meeting' },
    { startDate: '2018-11-01T12:00', endDate: '2018-11-01T13:30', title: 'Go to a gym' },
];


class BookAppointment extends React.Component {
    state = {
        date: new Date()
    }
    onChange = date => {
        this.setState({ date })

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
                          {/*    <Calendar onChange={this.onChange} value={this.state.date} minDate={new Date()} locale />*/}
                            <Paper>
                                <Scheduler
                                    data={schedulerData}
                                >
                                    <ViewState
                                        currentDate={currentDate}
                                    />
                                    <DayView
                                        startDayHour={9}
                                        endDayHour={14}
                                    />
                                    <Appointments />
                                </Scheduler>
                            </Paper>


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

export default connect(mapStateToProps)(BookAppointment)