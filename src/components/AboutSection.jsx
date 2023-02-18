import React from 'react'
import digital from "../assets/select.png"
import optimization from '../assets/optimization.png'
import paidmedia from "../assets/announcement.png"
import spinner from "../assets/Shap.png"
import aboutImage from "../assets/about-img.png"
import { HiArrowLongRight } from "react-icons/hi2"
const AboutSection = () => {
  return (
    <div className='about-section'>
          <div className="about-bg-overlay"></div>
           <div className="inner-row">
                  <div className="about-section-content">    
                           <div className="about-intro">
                                    <div className="about-title-column">
                                             <h2>Marketing Leverage for Businesses</h2>
                                             <div className="about-spin">
                                                  <img src={spinner} alt="" />
                                          </div>
                                    </div>
                                    <div className="about-description-column">
                                            <p>Our team has a successful track record of helping brands scale profitably based on high performing strategies that strengthen their position in the market space.</p>
                                    </div>
                                    
                           </div>
                           <div className="main-services-section">
                                   <div className="main-services-section-row">
                                            <div className="main-service-moja">
                                                     <div className="icon-section">
                                                            <img src={paidmedia} alt="" />
                                                     </div>
                                                     <h3>Paid Media</h3>
                                                     <p>Increasing conversions, repeat traffic, and online authoriy across your website is our top priority.</p>
                                            </div>
                                            <div className="main-service-moja">
                                                     <div className="icon-section">
                                                            <img src={digital} alt="" />
                                                     </div>
                                                     <h3>Digital Agency</h3>
                                                     <p>In order for your funnel to be successful, you need to make it as smooth as possible.</p>
                                            </div>
                                            <div className="main-service-moja">
                                                     <div className="icon-section">
                                                            <img src={optimization} alt="" />
                                                     </div>
                                                     <h3>Marketing Optics</h3>
                                                     <p>Leads are nurtured through our automation services, resulting in customer acquisition and retention.</p>
                                            </div>
                                   </div>
                           </div>

                           <div className="more-about-section">
                                  <div className="more-about-row">
                                           <div className="more-about-picture-column">
                                                   <img src={aboutImage} alt="" />
                                           </div>
                                           <div className="more-about-description-column">
                                                     <div className="more-about-description-inner">
                                                               <h2>Why you need digital marketing</h2>
                                                               <p>In order to scale new customer acquisition and retention for e-commerce brands, we work across the entire customer journey to bridge the funnel gaps that you might have then use our high performing strategies to help your brand scale profitably.</p>
                                                               <p>Improved customer experience is guaranteed as you position your brand strategically to attract more leads.</p>

                                                               <a href="s">Learn More <span><HiArrowLongRight /></span></a>
                                                     </div>
                                           </div>
                                  </div>
                           </div>
                  </div>
           </div>
    </div>
  )
}

export default AboutSection