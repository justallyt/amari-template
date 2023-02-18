import React from 'react'
import star from "../assets/Shap.png"
import costEffective from "../assets/money-bag.png"
import audit from "../assets/seo.png"
import team from "../assets/team.png"
import custom from "../assets/web-management.png"
import partnership from "../assets/deal.png"
import ideation from "../assets/idea.png"
const Benefits = () => {
  return (
    <div className='benefits-section'>
        <div className="benefits-bg-overlay"></div>
            <div className="inner-row">
                     <div className="benefits-section-content">
                           <div className="benefits-intro">
                                 <h1>What makes us stand out in the market and makes us Different.</h1>
                                 
                                 <div className="benefits-intro-paragraph">
                                         <div className="about-spin">
                                                <img src={star} alt="" />
                                         </div>
                                         <p>We can improve your business performance and gain more customers sporadically over a timespan by setting up concrete strategies aimed at elevating your business to top notch standards.</p>
                                 </div>
                           </div>

                           <div className="benefits-section-row">
                                    <div className="benefit-moja">
                                            <div className="icon-section">
                                                    <img src={custom} alt="" />
                                             </div>
                                            <h3>Customized Services</h3>
                                            <p>We offer customized services that can befit your business greatly</p>
                                    </div>
                                    <div className="benefit-moja">
                                            <div className="icon-section">
                                                    <img src={team} alt="" />
                                             </div>
                                            <h3>Expert Professionals</h3>
                                            <p>We have trained professionals at your service who can help businesses grow.</p>
                                    </div>
                                    <div className="benefit-moja">
                                            <div className="icon-section">
                                                    <img src={costEffective} alt="" />
                                             </div>
                                            <h3>Cost Effective</h3>
                                            <p>We design strategies that guarantees reaching your customers economically.</p>
                                    </div>
                                    <div className="benefit-moja">
                                            <div className="icon-section">
                                                    <img src={audit} alt="" />
                                             </div>
                                            <h3>Marketing Audit</h3>
                                            <p>We provide a roundup of how you've been fairing so far and document pain points.</p>
                                    </div>
                                    <div className="benefit-moja">
                                            <div className="icon-section">
                                                    <img src={partnership} alt="" />
                                             </div>
                                            <h3>Long Term Partnerships</h3>
                                            <p>We join up and create a perfect blend of your business with a branch of digital agency on the side.</p>
                                    </div>
                                    <div className="benefit-moja">
                                            <div className="icon-section">
                                                    <img src={ideation} alt="" />
                                             </div>
                                            <h3>Creative Ideation</h3>
                                            <p>We as a team pride ourselves with coming with creative ideas that will bootstrap your whole marketing.</p>
                                    </div>
                           </div>
                    </div>
            </div>
    </div>
  )
}

export default Benefits