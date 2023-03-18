import React from 'react'
import { faqs} from '../../data/faqs'
import SingleFaq from './SingleFaq'
const Faqs = () => {
    const firstData = faqs.slice(0, 5)
    const lastData = faqs.slice(5, faqs.length)

  return (
    <div className='faqs-section'>
             <div className="inner-row">
                         <div className="faqs-section-content">
                                  <div className="faqs-intro">
                                           <div className="faqs-intro-inner">
                                                   <h1>Learn more about what we do and why we do it well</h1>
                                                  <div className="faqs-description"> 
                                                           <p>Amari consulting experts shares more information that is quite crucial to adopting result-prone strategies to improve your business outreach and generate new customers.</p>
                                                   </div>
                                           </div>
                                  </div>

                                  <div className="faqs-container-row">
                                             <div className="faqs-column">
                                                    { firstData.map(item => <SingleFaq {...item}/>)}
                                             </div>
                                             <div className="faqs-column">
                                                   { lastData.map(item => <SingleFaq {...item} />)}
                                             </div>
                                  </div>
                         </div>
             </div>
    </div>
  )
}

export default Faqs