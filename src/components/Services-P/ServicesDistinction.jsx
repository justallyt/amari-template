import React from 'react'
import { TbCircleDot } from 'react-icons/tb'

const ServicesDistinction = () => {
  return (
    <div className='distinction-section'>
            <div className="inner-row">
                       <div className="distinction-section-content">
                                <div className="distinction-intro">
                                           <h1>What We Do</h1>
                                           <p>You deserve better than a one-size-fits-all option. Our firm's capabilities are focused around one thing – creating  industry-leading marketing solutions for different businesses. Below is a brief list of where we excel.</p>
                                </div>

                                <div className="distinction-content-row">
                                          <div className="distinction-moja">
                                                    <h3>Advisory</h3>
                                                    <ul>
                                                           <li><span><TbCircleDot /></span> Audit</li>
                                                           <li><span><TbCircleDot /></span> Project Management</li>
                                                           <li><span><TbCircleDot /></span> Brand Strategy</li>
                                                           <li><span><TbCircleDot /></span> Content Strategy</li>
                                                           <li><span><TbCircleDot /></span> Digital Strategy</li>
                                                    </ul>
                                          </div>
                                          <div className="distinction-moja">
                                                    <h3>Agency</h3>
                                                    <ul>
                                                           <li><span><TbCircleDot /></span> Social Media Management</li>
                                                           <li><span><TbCircleDot /></span> Graphic Design</li>
                                                           <li><span><TbCircleDot /></span> Web Design & Development</li>
                                                           <li><span><TbCircleDot /></span> SEO Optimization</li>
                                                           <li><span><TbCircleDot /></span> Content Writing</li>
                                                           <li><span><TbCircleDot /></span> Photography & Videography</li>
                                                    </ul>
                                          </div>
                                          <div className="distinction-moja">
                                                    <h3>Academy</h3>
                                                    <ul>
                                                           <li><span><TbCircleDot /></span> E-Power Workshops</li>
                                                           <li><span><TbCircleDot /></span> Interactive Workshops</li>
                                                           <li><span><TbCircleDot /></span> Ecommerce Training</li>
                                                           <li><span><TbCircleDot /></span> Digital Skills Training</li>
                                                           <li><span><TbCircleDot /></span> Marketing Workshops</li>
                                                    </ul>
                                          </div>
                                </div>
                       </div>
            </div>
    </div>
  )
}

export default ServicesDistinction