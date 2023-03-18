import React from 'react'

const Heropart = ({ location, title, description, image, dum1, dum2}) => {
  return (
    <div className='hero-part'>
            <div className="inner-row">
                    <div className="hero-part-content">
                             <div className="hero-part-row">
                                      <div className="hero-part-description">
                                               <div className="hero-part-description-inner">
                                                       <h3 data-aos="fade-down">{location}</h3>
                                                       <h1 data-aos="fade-up">{title}</h1>
                                                       <p data-aos="fade-up">{description}</p>
                                               </div>
                                      </div>

                                      <div  className="hero-part-images">
                                               { image ?  <img src={image} alt="" data-aos="zoom-in-left" /> : 
                                                    <div className='image-box'>
                                                             <img src={dum1} alt="" data-aos="zoom-in-right" />
                                                             <img src={dum2} alt="" data-aos="zoom-in-left" />
                                                    </div>
                                               }
                                      </div>
                             </div>

                    </div>
            </div>
    </div>
  )
}

export default Heropart