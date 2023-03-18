import React, { useState } from 'react'
import { portfolios, switches, designs, web, socials } from '../../data/portfolio'

const PortfolioTypes = () => {
    const [selected, setSelected] = useState(0)

    const changeActive = (i) =>{
        if(selected === i){
            setSelected(null)
      }
        setSelected(i)
    }
  return (
    <div className='portfolio-section'>
             <div className="inner-row">
                       <div className="portfolio-section-content">
                                <div className="portfolio-intro">
                                          <h1>Our Work Speaks for Itself</h1>
                                          <p>Browse through some of our bespoke projects that have gone a long way to strengthen different brands giving them a cutting edge in the market to attract more customers to their business.</p>
                                </div>

                                <div className="portfolio-types-row">
                                            <div className="portfolio-switches">
                                                      <ul>
                                                              { switches.map(item => <li className={selected === item.id ? "active" : ""} key={item.id} onClick={() => changeActive(item.id)}>{item.name}</li>)}
                                                      </ul>
                                            </div>

                                            <div className="portfolio-shift-container-row">
                                                       <div className={ selected === 0 ? 'portfolio-container-moja all' : 'portfolio-container-moja hide'} >
                                                                  { portfolios.map( item => 
                                                                        <div className="portfolio-moja" key={item.id} data-aos='zoom-in'>
                                                                                <img src={item.image} alt="" />
                                                                        </div>
                                                                    )}
                                                       </div>
                                                       <div className={ selected === 1 ? "portfolio-container-moja" : "portfolio-container-moja hide"} >
                                                               { designs.map(item => 
                                                                     <div className="portfolio-moja" key={item.id}>
                                                                            <img src={item.image} alt="" />
                                                                     </div>
                                                                )}
                                                       </div>
                                                       <div className={ selected === 2 ? "portfolio-container-moja" : "portfolio-container-moja hide"}>
                                                                 { web.map(item => 
                                                                         <div className="portfolio-moja" key={item.id}>
                                                                                <img src={item.image} alt="" />
                                                                         </div>
                                                                    )}
                                                       </div>
                                                       <div className={ selected === 3 ? "portfolio-container-moja socials" : "portfolio-container-moja hide"}>
                                                                { socials.map(item => 
                                                                        <div className="portfolio-moja" key={item.id}>
                                                                                 <img src={item.image} alt="" />
                                                                        </div>
                                                                    )}
                                                       </div>
                                                       <div className={ selected === 4 ? "portfolio-container-moja" : "portfolio-container-moja hide"}></div>
                                            </div>
                                </div>
                       </div>
             </div>
    </div>
  )
}

export default PortfolioTypes