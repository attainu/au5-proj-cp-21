import React, { Component } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import SliderComponent from './slider'
import Parallax from './Parallax'

class Register extends Component {
      render() {
            
            return (
                  <div>
                        <Navbar/>
                        <br/>

                        <br/>
                        <Parallax/>
                        
                        <SliderComponent />
                        <br/>
                        <br/>
                        <Footer/>
                  </div>
            )
      }
}

export default Register