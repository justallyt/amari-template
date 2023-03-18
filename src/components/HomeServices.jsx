import React from 'react'
import imgService1 from "../assets/home-service1.png"
import imgService2 from "../assets/home-service2.png"
import imgService3 from "../assets/home-service3.png"
import growthImg from "../assets/growthImage.png"
import simplestar from "../assets/star.png"
import { HiOutlineArrowNarrowRight } from "react-icons/hi"
import { useLocation, NavLink } from 'react-router-dom'
const HomeServices = () => {
   const locator = useLocation()
  const url = locator.pathname.slice(1, locator.pathname.length -1)
  return (
    <div className={ url === 'services' ? 'home-services-section pbn' : 'home-services-section'}>
            <div className="inner-row">
                    <div className="home-services-section-content">
                          <div className="simple-star">
                                <img src={simplestar} alt="" />
                          </div>
                             <div className="home-services-intro">
                                    <h2 data-aos='fade-down'>We Create unique & efficient digital solutions</h2>
                                    <p data-aos='fade-up'>Brands can acquire and retain new customers using solutions that span the entire customer journey. Read on to discover just how.</p>
                             </div>

                             <div className="home-services-content-row">
                                    <div className="home-service-moja" data-aos='fade-right'>
                                             <h2>Marketing Audit</h2>
                                             <p>Get a comprehensive, customized report on your online brand performance to help you identify gaps and fully optimize your platform.</p>
                                             <a href="s">Learn More <span><HiOutlineArrowNarrowRight /></span></a>
                                             <div className="home-service-image">
                                                    <img src={imgService1} alt="" />
                                             </div>
                                    </div>
                                    <div className="home-service-moja" data-aos='fade-left'>
                                             <h2>E-commerce Strategy</h2>
                                             <p>Our team has a successful track record of helping brands scale profitably based on high performing strategies. E-commerce brands can acquire and retain new customers using solutions that span the entire customer journey. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam, odio! Maxime suscipit mollitia autem aspernatur.</p>
                                             <a href="s">Learn More <span><HiOutlineArrowNarrowRight /></span></a>
                                             <div className="home-service-image">
                                                    <img src={imgService2} alt="" />
                                             </div>
                                    </div>
                                    <div className="home-service-moja"data-aos='zoom-in'>
                                             <div className="home-service-description">
                                                    <h2>Design & Development</h2>
                                                    <p>To set up your brand online, you need to get it right from the design stage. We guide and hand hold you in the design and development of your online platform and go further to offer after launch support services to ensure you're off to a good start on your online journey..</p>
                                                    <a href="s">Learn More <span><HiOutlineArrowNarrowRight /></span></a>
                                             </div>
                                             <div className="home-service-image">
                                                    <img src={imgService3} alt="" />
                                             </div>
                                    </div>

                                    <div className="home-service-moja" data-aos='fade-right'>
                                             <h2>E-commerce Project Management</h2>
                                             <p>Rolling out an e-commerce project? We are your best bet. Our execution skills are unmatched; we seamlessly tie every element of your project together and guarantee success within timelines and budget.</p>
                                             <a href="s">Learn More <span><HiOutlineArrowNarrowRight /></span></a>
                                             <div className="home-service-image">
                                                    <img src={imgService2} alt="" />
                                             </div>
                                    </div>
                                    <div className="home-service-moja" data-aos='fade-left'>
                                             <h2>E-commerce Training</h2>
                                             <p> We also offer bespoke masterclasses on various topical issues in e-commerce to different audiences. </p>
                                             <a href="s">Learn More <span><HiOutlineArrowNarrowRight /></span></a>
                                             <div className="home-service-image">
                                                    <img src={imgService1} alt="" />
                                             </div>
                                    </div>
                             </div>

                             <div className={url === 'services' ? "home-service-growth hide" : "home-service-growth"}>
                                     <div className="home-service-growth-row">
                                               <div className="growth-images-column" data-aos='fade-right'>
                                                     <img src={growthImg} alt="" />
                                               </div>
                                               <div className="growth-description-column">
                                                     <div className="growth-description-column-inner">
                                                               <h2 data-aos='fade-down'>Growth drives everything we do</h2>

                                                               <p data-aos='fade-up'>In order to scale new customer acquisition and retention for e-commerce brands, we work across the entire customer journey.</p>

                                                               <NavLink to='/services/' data-aos='zoom-in' data-aos-delay='300'>View All Services</NavLink>
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