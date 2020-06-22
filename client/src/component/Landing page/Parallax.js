import React, { Component } from 'react'
import '../../App.css'
import Guide from './guide'
import Aos from 'aos'
import 'aos/dist/aos.css'
export default class Parallax extends Component {
      componentDidMount = () => {
            Aos.init({ duration: 2000 })
      }
      render() {
            return (
                  <div className="test">
                        <div data-aos= "fade-right" class="parallax">

                        </div>

                        <div className="parallax1">
                              <Guide/>
                        </div>
                  </div>
            )
      }
}
