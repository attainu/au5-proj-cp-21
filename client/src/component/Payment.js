import React from 'react'
import { withRouter } from 'react-router-dom'
import Navbar from './Landing page/Navbar'
import { connect } from 'react-redux'
import { bindActionCreators } from "redux";


class Payment extends React.Component{
    render(){
        return(
            <div>
                <Navbar />
                <div className="container">
                    <div className="row bg-secondary">
                        <div className="col-6 pt-3 pb-2">
                            <p className="text-center">
                                <a href="/home" class="btn btn-outline-warning btn-lg" role="button" aria-pressed="true">Home</a>
                            </p>
                        </div>
                        <div className="col-6 pt-3 pb-2">
                            <p className="text-center">
                                <a href="#" class="btn btn-outline-warning btn-lg" role="button" aria-pressed="true">My Booking</a>
                            </p>
                        </div>
                    </div>
                    
                    {this.props.bookingStatus ? <h1>Booking Confirm</h1> : <h1>Booking Failed</h1>}

                </div>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log("Payment 35", state)
    return {
        bookingStatus :  state.doctor.cBooking.status,
        docInfo : state.doctor.selecteddoctor
    }
   
}
// const mapDispatchToProps = (dispatch) => {
//     return bindActionCreators({ docSlott, selectDoctor }, dispatch)
// }

export default connect(mapStateToProps)(withRouter(Payment))