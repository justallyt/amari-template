import React, { useState } from 'react'
import { FiChevronDown } from "react-icons/fi"
const SingleFaq = ({ title, answer}) => {
    const [status, setStatus]  = useState(false)

    const toggleThing = () => setStatus(!status)
  return (
    <div className='faq-container-box'>
              <div className={status ? "faq-header active" : "faq-header"} onClick={toggleThing}>
                       <h2>{title}</h2>
                       <span><FiChevronDown /></span>
              </div>
              <div className={status ? 'faq-answer active ' : "faq-answer"} >
                       <div className="faq-answer-inner"> 
                              <p>{answer}</p>
                       </div>
              </div>
    </div>
  )
}

export default SingleFaq