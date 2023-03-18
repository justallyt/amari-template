import React from 'react'
import { NavLink } from 'react-router-dom'

const Nudge = () => {
  return (
    <div className='nudge-content'>
              <h1 data-aos="fade-down"><span>Ready</span> for your Ecommerce Success?</h1>
              <p data-aos="fade-up">Amari is is here to deal with a wide range of tailored services to meet your needs and requirements.</p>
              <NavLink to="/contact-us/" data-aos="zoom-in">Get in Touch</NavLink>
    </div>
  )
}

export default Nudge