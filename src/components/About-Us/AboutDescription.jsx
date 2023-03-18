import React from 'react'
import aboutImg1 from "../../assets/about-img3.jpg"
import aboutImg2 from "../../assets/about-img4.jpg"
import excellence from "../../assets/excellence.png"
import transparency from "../../assets/security.png"
import trust from "../../assets/trust.png"
import results from "../../assets/data-analytics.png"
import people from "../../assets/rating.png"
import img1 from "../../assets/about-img5.jpg"
import img2 from "../../assets/about-img6.jpg"
import img3 from "../../assets/about-img7.jpg"
import img4 from "../../assets/about-img8.jpg"

const AboutDescription = () => {
  return (
         <>
       <div className='about-whole-wrapper'>
          <div className='about-description'>
             <div className="inner-row">
                      <div className="about-description-content">
                               <div className="about-description-column">
                                      <h1 data-aos="fade-down">Founded on trust. Focused on relationships.</h1>
                                      <div className="column-image" data-aos="fade-up">
                                               <img src={aboutImg1} alt="" />
                                      </div>

                                      <div className="statements">
                                             <div className="statement-moja" data-aos="fade-up">
                                                     <h3>Vision</h3>
                                                     <p>To be the leading ecommerce consulting firm in Africa</p>
                                             </div>
                                             <div className="statement-moja" data-aos="fade-up">
                                                       <h3>Mission</h3>
                                                       <p>To contribute to socio-economic transformation of the African Continent by leveraging the internet to grow businesses and create jobs.</p>
                                             </div>
                                      </div>
                               </div>
                               <div className="about-description-column">
                                        <p data-aos="fade-down">We are an award-winning ecommerce consulting firm. Our creative, digital, and support solutions are tailored to our customers specific needs. Understanding, visualizing, and articulating innovation allows us to create new ideas that are less complex, more portable, and more aesthetically pleasing. We take pride in our relationships with our customers and want to create enduring solutions that they can use for years.</p>
                                        <p data-aos="fade-left">Amari consulting also hosts the Epower Programme - a combination of events, masterclasses and mentorship - aimed at building e-commerce capacity on the African Continent.</p>

                                        <div className="column-image">
                                               <img src={aboutImg2} alt="" data-aos="fade-up" />
                                        </div>
                               </div>
                      </div>
             </div>
    </div>

    <div className="values-section">
             <div className="inner-row">
                          <div className="values-section-content">
                                     <div className="values-intro">
                                              <h1 data-aos="fade-down">Values we uphold as a firm</h1>
                                              <p data-aos="fade-up">To be successful in business today, a brand must consider how it will make its costumers feel. As an ecommerce consulting firm, we visualize and create services, and solutions that shake things up, win people over and bring the future to life.</p>
                                     </div>

                                     <div className="values-content-row">
                                              <div className="value-moja" data-aos="zoom-in-right">
                                                       <div className="value-icon">
                                                                <img src={transparency} alt="" />
                                                       </div>
                                                       <h3>Integrity</h3>
                                                       <p>We believe in choosing our thoughts and actions based on values rather than personal gain in order to succeed.</p>
                                              </div>
                                              <div className="value-moja" data-aos="zoom-in">
                                                       <div className="value-icon">
                                                                <img src={excellence} alt="" />
                                                       </div>
                                                       <h3>Excellence</h3>
                                                       <p>Because we are defined by what we repeatedly do, we believe excellence is not a trait, but a habit.</p>
                                              </div>
                                              <div className="value-moja" data-aos="zoom-in-left">
                                                       <div className="value-icon">
                                                                <img src={trust} alt="" />
                                                       </div>
                                                       <h3>Respect</h3>
                                                       <p>We believe respect should be the first thing we give anyone, and everyone deserves to be treated with kindness. No exceptions.</p>
                                              </div>
                                              <div className="value-moja" data-aos="zoom-in-right">
                                                       <div className="value-icon">
                                                                <img src={results} alt="" />
                                                       </div>
                                                       <h3>Inspiration</h3>
                                                       <p>Amari is a 100% open environment where everyone is encouraged to share ideas, big and small to inspire great results.</p>
                                              </div>
                                              <div className="value-moja" data-aos="zoom-in-left">
                                                       <div className="value-icon">
                                                                <img src={people} alt="" />
                                                       </div>
                                                       <h3>Collaboration</h3>
                                                       <p>We believe unity is strength, and when there is collaboration, incredible things can be accomplished.</p>
                                              </div>
                                     </div>
                          </div>
             </div>
         </div>
    </div>

    <div className="random-images">
            <div className="random-moja" data-aos="zoom-in">
                     <img src={img1} alt="" />
            </div>
            <div className="random-moja" data-aos="zoom-in">
                     <img src={img2} alt="" />
            </div>
            <div className="random-moja" data-aos="zoom-in">
                     <img src={img3} alt="" />
            </div>
            <div className="random-moja" data-aos="zoom-in">
                     <img src={img4} alt="" />
            </div>
    </div>
         </>
  )
}

export default AboutDescription 