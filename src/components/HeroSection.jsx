import React from 'react'
import { RiPlayMiniFill } from "react-icons/ri"
import heroImage1 from "../assets/hero-image1.jpg"
import heroImage2 from "../assets/hero-image2.png"
import heroImage3 from "../assets/hero-image3.png"
import snap from "../assets/Shap.png"
import shout from "../assets/shout.png"
const HeroSection = () => {
  return (
    <div className='hero-section'>
            <div className="bg-art"></div>
            <div className="inner-row">
                      <div className="hero-section-content">
                              <div className="hero-overlay-kidogo"></div>
                               <div className="hero-texts">
                                       <div className="hero-title">
                                                
                                                <div className="snap-bg"></div>
                                                <div className="snap-shap">
                                                        <img src={snap} alt="" />
                                                </div>
                                                <h1><span>Growing<div className="snap-shout"> <img src={shout} alt="" /></div></span> your Business Online</h1>
                                       </div>
                                       <p>We drive the ecommerce agenda in Africa by helping african businesses harness the power of the internet.</p>

                                       <div className="hero-btn">
                                               <span><RiPlayMiniFill  className='play-icon'/></span>
                                               <p>Watch Video</p>
                                       </div>
                               </div>

                               <div className="hero-images-container">
                                       <div className="hero-images-row">
                                                 <div className="hero-image-moja push-up">
                                                          <img src={heroImage1} alt="" loading='lazy'/>
                                                 </div>
                                                 <div className="hero-image-moja middle">
                                                          <img src={heroImage2} alt="" loading='lazy' />
                                                 </div>
                                                 <div className="hero-image-moja push-up">
                                                          <img src={heroImage3} alt="" loading='lazy' />
                                                 </div>
                                       </div>
                               </div>
                      </div>
            </div>
    </div>
  )
}

export default HeroSection