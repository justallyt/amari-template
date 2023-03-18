import React from 'react'
import owit from "../assets/logos/owit.png"
import amitruck from "../assets/logos/amitruck.png"
import unwomen from "../assets/logos/unwomen.png"
import kra from "../assets/logos/kra.png"
import gatf from "../assets/logos/gatf.png"
import tea from "../assets/logos/tea.png"
import cybrix from "../assets/logos/cybrix.png"
import kepsa from "../assets/logos/kepsa.png"
import grofin from "../assets/logos/grofin.png"
import jumia from "../assets/logos/jumia.png"
import kam from "../assets/logos/kam.png"
import ey from "../assets/logos/ey.png"
import eawbp from "../assets/logos/eawbp.png"
import dhl from "../assets/logos/dhl.png"
import emkf from "../assets/logos/emkf.png"
import Support from './Support'
import Nudge from './Nudge'

const Partners = () => {
  return (
    <div className='partners-section'>
          <div className="inner-row">
                   <div className="partners-section-content">
                            <div className="partners-intro">
                                    <h1 data-aos="fade-down">Brands we've worked with</h1>
                                    <p data-aos="fade-up">Our team has a successful track record of helping brands scale profitably based on high-performing strategies.</p>
                            </div>

                            <div className="partners-logos">
                                      <div className="partner-moja"  data-aos="zoom-in">
                                              <img src={eawbp} alt="" />
                                      </div>
                                      <div className="partner-moja"  data-aos="zoom-in">
                                              <img src={kam} alt="" />
                                      </div>
                                      <div className="partner-moja"  data-aos="zoom-in">
                                              <img src={kra} alt="" />
                                      </div>
                                      <div className="partner-moja"  data-aos="zoom-in">
                                              <img src={grofin} alt="" />
                                      </div>
                                      <div className="partner-moja"  data-aos="zoom-in">
                                              <img src={tea} alt="" />
                                      </div>
                                      <div className="partner-moja"  data-aos="zoom-in">
                                              <img src={gatf} alt="" />
                                      </div>
                                      <div className="partner-moja"  data-aos="zoom-in">
                                              <img src={unwomen} alt="" />
                                      </div>
                                      <div className="partner-moja"  data-aos="zoom-in">
                                              <img src={owit} alt="" />
                                      </div>
                                      <div className="partner-moja"  data-aos="zoom-in">
                                              <img src={cybrix} alt="" />
                                      </div>
                                      <div className="partner-moja"  data-aos="zoom-in">
                                              <img src={amitruck} alt="" />
                                      </div>
                                      <div className="partner-moja"  data-aos="zoom-in">
                                              <img src={kepsa} alt="" />
                                      </div>
                                      <div className="partner-moja"  data-aos="zoom-in">
                                              <img src={ey} alt="" />
                                      </div>
                                      <div className="partner-moja"  data-aos="zoom-in">
                                              <img src={jumia} alt="" />
                                      </div>
                                      <div className="partner-moja"  data-aos="zoom-in">
                                              <img src={dhl} alt="" />
                                      </div>
                                      <div className="partner-moja"  data-aos="zoom-in">
                                              <img src={emkf} alt="" />
                                      </div>
                            </div>

                            <Support />
                            <Nudge />
                   </div>
          </div>
    </div>
  )
}

export default Partners