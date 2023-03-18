import React, { useEffect, useRef, useState } from 'react'
import { RiPlayMiniFill } from "react-icons/ri"
import heroImage1 from "../assets/hero-image1.jpg"
import heroImage2 from "../assets/hero-image2.png"
import heroImage3 from "../assets/hero-image3.png"
import snap from "../assets/online-shop.png"
import social from "../assets/social-media.png"
import { CgClose } from "react-icons/cg"
import { gsap } from 'gsap'
const HeroSection = () => {
        const [modalactive, setModal] = useState(false)
        const modal = useRef()
        const overlay = useRef()
        const videoBox = useRef()
        
        const openModal = (e) =>{
                e.stopPropagation()
                setModal(true)
        }
        useEffect(()=>{
                if(modalactive){
                        modal.current.classList.add("active")
                        let modalTimeline = gsap.timeline()
                        modalTimeline.to(overlay.current, {
                               y: 0,
                               duration: 1
                        })
                        modalTimeline.to(videoBox.current, {
                                 scale: 1,
                                 duration: 1
                        })
                }else{
                        let modalTimeline = gsap.timeline()
                        modalTimeline.to(videoBox.current, {
                                scale: 0,
                                duration: 1
                       })
                        modalTimeline.to(overlay.current, {
                               y: "-100%",
                               duration: 1
                        })
                        setTimeout(()=>{
                                modal.current.classList.remove("active")
                        },2200)
                }
        },[modalactive])
  return (
    <div className='hero-section'>
            <div className="bg-art"></div>
            <div className="inner-row">
                      <div className="hero-section-content">
                              {/* <div className="hero-overlay-kidogo"></div> */}
                               <div className="hero-texts">
                                       <div className="hero-title">                                         
                                                {/* <div className="snap-bg"></div> */}
                                                <div className="ecommerce-shap" data-aos='zoom-in'>
                                                        <img src={snap} alt="" />
                                                </div>
                                                <div className="social-shap" data-aos='zoom-in'>
                                                        <img src={social} alt="" />
                                                </div>
                                                <h1 data-aos='fade-down'><span>Growing </span>your Business Online</h1>
                                       </div>
                                       <p data-aos='fade-up' data-aos-offset="-100">We drive the ecommerce agenda in Africa by helping african businesses harness the power of the internet.</p>

                                       <div data-aos='zoom-in' data-aos-offset="-200" data-aos-delay="300" className="hero-btn" onClick={openModal}>
                                               <span><RiPlayMiniFill  className='play-icon'/></span>
                                               <p>Watch Video</p>
                                       </div>
                               </div>

                               <div className="hero-images-container">
                                       <div className="hero-images-row">
                                                 <div className="hero-image-moja push-up">
                                                          <img src={heroImage1} alt="" loading='lazy' data-aos='zoom-in-up' data-aos-offset="-250"/>
                                                 </div>
                                                 <div className="hero-image-moja middle">
                                                          <img src={heroImage2} alt="" loading='lazy' data-aos='zoom-in-up' data-aos-offset="-350"/>
                                                 </div>
                                                 <div className="hero-image-moja push-up">
                                                          <img src={heroImage3} alt="" loading='lazy' data-aos='zoom-in-up' data-aos-offset="-250"/>
                                                 </div>
                                       </div>
                               </div>


                               { /* Video Modal part*/}
                               <div className="video-modal" ref={modal}>
                                        <div className="overlay" ref={overlay}></div>
                                        <div className="video-modal-content" ref={videoBox}>
                                                <span className="close-btn" onClick={() => setModal(false)}><CgClose /></span>
                                                <div className="video-body">
                                                       <iframe  width="560" height="315" src={modalactive ? "https://www.youtube.com/embed/u8muYnPnyhI?autoplay=0&controls=0&rel=0&loop=1&modestbranding=1&showinfo=0" : "" } title="brand video" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                                                 </div>
                                        </div>
                               </div>
                      </div>
            </div>
    </div>
  )
}

export default HeroSection