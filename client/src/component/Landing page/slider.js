import React, { Component } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default class SliderComponent extends Component {
      render() {

            var settings = {
                  infinite: true,
                  autoplaySpeed: 2000,
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  // initialSlide: 1,
                  autoplay: true,
                  responsive: [
                        {
                              breakpoint: 1024,
                              settings: {
                                    slidesToShow: 3,
                                    slidesToScroll: 3,
                                    infinite: true,
                                    dots: true
                              }
                        },
                        {
                              breakpoint: 600,
                              settings: {
                                    slidesToShow: 2,
                                    slidesToScroll: 2,
                                    initialSlide: 2
                              }
                        },
                        {
                              breakpoint: 480,
                              settings: {
                                    slidesToShow: 1,
                                    slidesToScroll: 1
                              }
                        }
                  ]
            }
            return (
                  <div className="container-fluid">
                        <div className="row">
                              <div className="col">
                                    <Slider {...settings}>
                                          <div className="slide1">
                                                <img
                                                      src={require("../../images/12.jpg")}
                                                      alt="First slide"
                                                      width="100%"
                                                      height="600px"
                                                />
                                          </div>
                                          <div>
                                                <img
                                                      src={require("../../images/13.jpg")}
                                                      alt="Second slide"
                                                      width="100%"
                                                      height="600px"

                                                />
                                          </div>


                                          <div>
                                                <img
                                                      src={require("../../images/15.jpg")}
                                                      alt="Second slide"
                                                      width="100%"
                                                      height="600px"

                                                />
                                          </div>
                                          <div>
                                                <img
                                                      src={require("../../images/19.png")}
                                                      alt="Second slide"
                                                      width="100%"
                                                      height="600px"

                                                />
                                          </div>
                                          <div>
                                                <img
                                                      src={require("../../images/18.png")}
                                                      alt="Second slide"
                                                      width="100%"
                                                      height="600px"

                                                />
                                          </div>
                                    </Slider>
                              </div>
                        </div>
                  </div>

            )
      }
}
