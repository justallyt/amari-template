import React from 'react'
import digital from "../assets/web-management.png"
import commerce from '../assets/commerce.png'
import training from "../assets/analysis.png"
import spinner from "../assets/Shap.png"
import aboutImage from "../assets/about-img.png"
import { HiArrowLongRight } from "react-icons/hi2"
import { NavLink } from 'react-router-dom'
const AboutSection = () => {
  return (
    <div className='about-section'>
          <div className="about-bg-overlay"></div>
           <div className="inner-row">
                  <div className="about-section-content">    
                           <div className="about-intro">
                                    <div className="about-title-column">
                                             <h2 data-aos='fade-right'>Marketing Leverage for Businesses</h2>
                                             <div className="about-spin">
                                                  <img src={spinner} alt="" />
                                          </div>
                                    </div>
                                    <div className="about-description-column">
                                            <p data-aos='fade-left'>Our team has a successful track record of helping brands scale profitably based on high performing strategies that strengthen their position in the market space.</p>
                                    </div>
                                    
                           </div>
                           <div className="main-services-section">
                                   <div className="main-services-section-row">
                                            <div className="main-service-moja" data-aos='fade-right'>
                                                     <div className="icon-section">
                                                            <img src={digital} alt="" />
                                                     </div>
                                                     <h3>Digital Marketing Agency</h3>
                                                     <p>We support businesses by offering web development, graphic design, social media management, photography, videography, SEO and content writing.</p>
                                            </div>
                                            <div className="main-service-moja" data-aos='zoom-in'>
                                                     <div className="icon-section">
                                                            <img src={commerce} alt="" />
                                                     </div>
                                                     <h3>Ecommerce Development</h3>
                                                     <p>Work with our highly experienced and competent designers and developers to build your business e-commerce platform.</p>
                                            </div>
                                            <div className="main-service-moja" data-aos='fade-left'>
                                                     <div className="icon-section">
                                                            <img src={training} alt="" />
                                                     </div>
                                                     <h3>Ecommerce Training</h3>
                                                     <p>Learn the ins and outs of e-commerce by taking our training programs, bespoke masterclasses and online courses.</p>
                                            </div>
                                   </div>
                           </div>

                           <div className="more-about-section">
                                  <div className="more-about-row">
                                           <div className="more-about-picture-column" data-aos='fade-right'>
                                                   <img src={aboutImage} alt="" />
                                           </div>
                                           <div className="more-about-description-column">
                                                     <div className="more-about-description-inner">
                                                               <h2 data-aos='fade-down'>Top-tier e-commerce full service consulting agency</h2>
                                                               <p data-aos='fade-up'>We exist to help African businesses harness the power of the internet and scale; We enable businesses <span>lower costs</span>, <span>stay competitive</span> and <span>go global </span>  by guiding them to adopt winning e-commerce strategies.</p>
                                                               <p data-aos='fade-up' data-aos-delay="300" >We are on a mission to contribute to socio-economic transformation of the African Continent by leveraging the internet to grow businesses and create jobs.</p>

                                                               <NavLink to="/about-us/" data-aos='zoom-in' data-aos-delay='600'>Learn More <span><HiArrowLongRight /></span></NavLink>
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