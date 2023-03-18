import React from 'react'
import { BsEnvelope } from "react-icons/bs"
import { RxArrowRight } from "react-icons/rx"
import { HiArrowLongRight } from "react-icons/hi2"
import { ImFacebook } from "react-icons/im"
import { ImTwitter } from "react-icons/im"
import { RiInstagramLine } from "react-icons/ri"
import { TfiLinkedin } from "react-icons/tfi"
const Footer = () => {
  return (
        <>
               <footer>
           <div className="inner-row">
           <div className="footer-content">
                    <div className="footer-column">
                           <h3>Office</h3>
                           <div className="column-content">
                                 <p>4th Floor, Yaya Center, Argwings Kodhek Rd, <br />Kilimani Nairobi.</p>
                                 <a href='s' className='email'>customer-support@amariconsult.com</a>
                                 <p className='number'>+254 735 042 089</p>
                           </div>
                    </div>
                    <div className="footer-column">
                          <h3>Company</h3>
                          <ul>
                               <li><a href="s"> <span><HiArrowLongRight /></span>About Us</a></li>
                               <li><a href="s"> <span><HiArrowLongRight /></span>Careers</a></li>
                               <li><a href="s"><span><HiArrowLongRight /></span>Faqs</a></li>
                               <li><a href="s"><span><HiArrowLongRight /></span>Contact Us</a></li>
                               <li><a href="s"><span><HiArrowLongRight /></span>Blog</a></li>
                          </ul>
                    </div>
                    <div className="footer-column">
                           <h3>Newsletter</h3>
                           <div className="footer-form">
                                  <form action="s">
                                          <div className="input-row">
                                                  <div className="input">
                                                         <span><BsEnvelope /></span>
                                                         <input type="text" placeholder='Enter your email address' />
                                                  </div>
                                                  <div className="choice">
                                                         <input type="checkbox" name="" id="" />
                                                         <span>I agree to the <a href="s">Privacy Policy</a></span>
                                                  </div>
                                          </div>
                                          <button><span><RxArrowRight /></span></button>
                                  </form>
                           </div>

                           <div className="footer-social-links">
                                     <ul>
                                            <li><a href="s"><ImFacebook /></a></li>
                                            <li><a href="s"><ImTwitter /></a></li>
                                            <li><a href="s"><RiInstagramLine /></a></li>
                                            <li><a href="s"><TfiLinkedin /></a></li>
                                     </ul>
                           </div>
                    </div>
           </div>
           </div>
    </footer>

          <div className="copyright-section">
                    <div className="inner-row">
                               <p>All Rights Reserved &copy; { new Date().getFullYear() } Amari Consulting Limited</p>
                               <div className="policy-links">
                                       <a href="s">Terms & Conditions</a> |
                                       <a href="s">Privacy Policy</a>
                               </div>
                    </div>
           </div>
        </>
  )
}

export default Footer