import React from 'react'
import imgService1 from "../assets/home-service1.png"
import imgService2 from "../assets/home-service2.png"
import imgService3 from "../assets/home-service3.png"
import growthImg from "../assets/growthImage.png"
import simplestar from "../assets/star.png"
import { HiOutlineArrowNarrowRight } from "react-icons/hi"
const HomeServices = () => {
  return (
    <div className='home-services-section'>
            <div className="inner-row">
                    <div className="home-services-section-content">
                          <div className="simple-star">
                                <img src={simplestar} alt="" />
                          </div>
                             <div className="home-services-intro">
                                    <h2>Make your marketing more effective</h2>
                                    <p>E-commerce brands can acquire and retain new customers using solutions that span the entire customer journey.</p>
                             </div>

                             <div className="home-services-content-row">
                                    <div className="home-service-moja">
                                             <h2>Marketing Automation</h2>
                                             <p>Our team has a successful track record of helping brands.</p>
                                             <a href="s">Learn More <span><HiOutlineArrowNarrowRight /></span></a>
                                             <div className="home-service-image">
                                                    <img src={imgService1} alt="" />
                                             </div>
                                    </div>
                                    <div className="home-service-moja">
                                             <h2>Content Marketing</h2>
                                             <p>Our team has a successful track record of helping brands scale profitably based on high performing strategies. E-commerce brands can acquire and retain new customers using solutions that span the entire customer journey.</p>
                                             <a href="s">Learn More <span><HiOutlineArrowNarrowRight /></span></a>
                                             <div className="home-service-image">
                                                    <img src={imgService2} alt="" />
                                             </div>
                                    </div>
                                    <div className="home-service-moja">
                                             <div className="home-service-description">
                                                    <h2>Social Media Marketing</h2>
                                                    <p>Leads are nurtured through our email, SMS, and automation services, resulting in customer acquisition and retention.</p>
                                                    <a href="s">Learn More <span><HiOutlineArrowNarrowRight /></span></a>
                                             </div>
                                             <div className="home-service-image">
                                                    <img src={imgService3} alt="" />
                                             </div>
                                    </div>
                             </div>

                             <div className="home-service-growth">
                                     <div className="home-service-growth-row">
                                               <div className="growth-images-column">
                                                     <img src={growthImg} alt="" />
                                               </div>
                                               <div className="growth-description-column">
                                                     <div className="growth-description-column-inner">
                                                               <h2>Growth drives everything we do</h2>

                                                               <p>In order to scale new customer acquisition and retention for e-commerce brands, we work across the entire customer journey.</p>

                                                               <div className="growth-numbers">
                                                                        <div className="growth-moja">
                                                                                 <h1>5K+</h1>
                                                                                 <h4>Advertising Partners</h4>
                                                                        </div>
                                                                        <div className="growth-moja">
                                                                                 <h1>90%</h1>
                                                                                 <h4>Increase in ROAS</h4>
                                                                        </div>
                                                               </div>
                                                     </div>
                                               </div>
                                     </div>
                             </div>
                    </div>
            </div>
    </div>
  )
}

export default HomeServices