import React from 'react'
import contactImg from "../assets/contact-img.png"
const Support = () => {
  return (
    <div className='support-section'>
            <div className="support-content">
                     <div className="support-description">
                               <div className="support-description-inner">
                                          <h1 data-aos="fade-right">Reliable Customer Support Service</h1>
                                           <p data-aos="fade-up">Technology and digital breakthroughs are transforming businesses, and growth means adopting new goods and services or building your own. We are here to assist you in building solutions and adapting to new services. Our Consulting Services cover all aspects of a business. Moreover, Amari offers extensive services to back up your company by applying strategy to drive the people, method, information, and technology.</p>
                               </div>
                     </div>
                     <div className="support-image" data-aos="fade-left">
                               <img src={contactImg} alt="" />
                     </div>
            </div>
    </div>
  )
}

export default Support