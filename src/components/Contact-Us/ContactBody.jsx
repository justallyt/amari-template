import React from 'react'
import callImg from "../../assets/call-center.jpg"
const ContactBody = () => {
  return (
    <div className='contact-body-section'>
             <div className="inner-row">
                      <div className="contact-body-content">
                                  <div className="contact-intro">
                                           <h1 data-aos="fade-down">How can we Help?</h1>
                                           <p data-aos='fade-up'>Our help center is fresh and always open for business. If you can’t find the answer you’re looking for, we’re here to lend a hand. Let's get the conversation started, fill in the form below and we'll get back to you as soon as we can.</p>
                                  </div>

                                  <div className="contact-body-row">
                                              <div className="contact-image" data-aos="zoom-in-right">
                                                        <img src={callImg} alt="" />
                                              </div>
                                              <div className="contact-form" data-aos="zoom-in-left">
                                                      <h3>Send Us A Message</h3>
                                                      <form action="">
                                                                <div className="form-row">
                                                                        <label htmlFor="name">Your name</label>
                                                                        <input type="text" name='name' className='form-control' />
                                                                </div>
                                                                <div className="form-row">
                                                                        <label htmlFor="email">Your Email</label>
                                                                        <input type="email" name='email' className='form-control' />
                                                                </div>
                                                                <div className="form-row">
                                                                        <label htmlFor="number">Your Phone Number</label>
                                                                        <input type="number" name='number' className='form-control' />
                                                                </div>
                                                                <div className="form-row">
                                                                       <label htmlFor="message">Message</label>
                                                                        <textarea name="message" id="" cols="30" rows="10"></textarea>
                                                                </div>
                                                                <div className="form-btn">
                                                                          <button type="submit">Submit</button>
                                                                </div>
                                                      </form>
                                              </div>
                                  </div>
                      </div>
             </div>
    </div>
  )
}

export default ContactBody