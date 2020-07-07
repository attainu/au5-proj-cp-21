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
                                          <div>
                                                <div className="container m-5">
                                                      <div className="row">
                                                            <div className="col-3">
                                                                 
                                                            </div>
                                                            <div className="col-9 mx-auto">
                                                                  <img
                                                                        src={require("../../images/testimonials/1.jpg")}
                                                                        alt="First slide"
                                                                        style={{ width: "100px", height: "100px", borderRadius: "20px" }}
                                                                        className="mx-auto pt-1 pb-1"

                                                                  />
                                                                  <h4 className="text-center">Mary Brane</h4>
                                                                  <p className="text-center">
                                                                        <i class="fa fa-quote-left" aria-hidden="true"></i>&nbsp;Thank you for your kindness. Thank you for all the years of excellent nursing. You always ensured I was comfortable and all my needs met. I regret that I can no longer receive my medication at Barnes. Thank you to all the nurses&nbsp; <i class="fa fa-quote-right" aria-hidden="true"></i>
                                                                        
                                                               </p>
                                                            </div>
                                                      </div>
                                                </div>
                                          </div>

                                          <div>
                                                <div className="container m-5">
                                                      <div className="row">
                                                            <div className="col-3">
                                                                 
                                                                       
                                                            </div>
                                                            <div className="col-9 mx-auto">
                                                                  <img
                                                                        src={require("../../images/testimonials/2.jpg")}
                                                                        alt="First slide"
                                                                        style={{ width: "100px", height: "100px", borderRadius: "20px" }}
                                                                        className="mx-auto pt-1 pb-1"

                                                                  />
                                                               <h4 className="text-center">Sheri Wood</h4>
                                                                  <p className="text-center" >
                                                                        <i class="fa fa-quote-left" aria-hidden="true"></i>&nbsp;Thank you for your kindness. Thank you for all the years of excellent nursing. You always ensured I was comfortable and all my needs met. I regret that I can no longer receive my medication at Barnes. Thank you to all the nurses&nbsp;<i class="fa fa-quote-right" aria-hidden="true"></i>
                                                               </p>
                                                            </div>
                                                      </div>
                                                </div>
                                          </div>

                                          <div>
                                                <div className="container m-5">
                                                      <div className="row">
                                                            <div className="col-3">
                                                                 
                                                                      
                                                            </div>
                                                            <div className="col-9 mx-auto">
                                                                  <img
                                                                        src={require("../../images/testimonials/3.jpg")}
                                                                        alt="First slide"
                                                                        style={{ width: "100px", height: "100px", borderRadius: "20px" }}
                                                                        className="mx-auto pt-1 pb-1"

                                                                  />
                                                               <h4 className="text-center">Donnaelia Branson</h4>
                                                                  <p className="text-center">
                                                                        <i class="fa fa-quote-left" aria-hidden="true"></i>&nbsp;Thank you for your kindness. Thank you for all the years of excellent nursing. You always ensured I was comfortable and all my needs met. I regret that I can no longer receive my medication at Barnes. Thank you to all the nurses&nbsp;<i class="fa fa-quote-right" aria-hidden="true"></i>
                                                                        
                                                               </p>
                                                            </div>
                                                      </div>
                                                </div>
                                          </div>

                                          <div>
                                                <div className="container  m-5">
                                                      <div className="row">
                                                            <div className="col-3">
                                                                 
                                                                       
                                                            </div>
                                                            <div className="col-9 mx-auto">
                                                                  <img
                                                                        src={require("../../images/testimonials/4.jpg")}
                                                                        alt="First slide"
                                                                        style={{ width: "100px", height: "100px", borderRadius: "20px" }}
                                                                        className="mx-auto pt-1 pb-1"

                                                                  />
                                                               <h4 className="text-center">Carole Teague</h4>
                                                                  <p className="text-center" >
                                                                        <i class="fa fa-quote-left" aria-hidden="true"></i>&nbsp;Thank you for your kindness. Thank you for all the years of excellent nursing. You always ensured I was comfortable and all my needs met. I regret that I can no longer receive my medication at Barnes. Thank you to all the nurses&nbsp; <i class="fa fa-quote-right" aria-hidden="true"></i>
                                                               </p>
                                                            </div>
                                                      </div>
                                                </div>
                                          </div>

                                    </Slider>
                              </div>
                        </div>
                  </div>

            )
      }
}