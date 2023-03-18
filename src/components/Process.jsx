import React, { useState }  from 'react'
import workflow from "../assets/workflow.png"
import { process_texts } from '../data/process'
import { HiChevronDown } from "react-icons/hi2"
const Process = () => {
  return (
    <div className= 'process-section'>
             <div className="inner-row">
                     <div className="process-section-content"> 
                               <div className="process-section-column">
                                        <h1 data-aos="zoom-in-down">Our Customized Workflow</h1>
                                        <div className="process-image" data-aos="zoom-in-right">
                                                 <img src={workflow} alt="" />
                                        </div>
                               </div>
                               <div className="process-workflow-details">
                                         {
                                               process_texts.map(item => 
                                                    <AccordionItem {...item} key={item.id} />
                                                )
                                         }
                               </div>
                     </div>
             </div>
    </div>
  )
}


const AccordionItem = ({ id, process_title, process_description}) => {
        const [status, setStatus] = useState(false)
  
        const handleClick = () =>{
              setStatus(!status)
        }
        return (
        <div className="accordion-item" key={id} data-aos="zoom-in-left">
                <span className='number'>{id}.</span>
                <div className={status ? "accordion-title active": "accordion-title"} onClick={handleClick}>
                          <h2>{process_title}</h2>
                          <span><HiChevronDown /></span>
                </div>
                <div className={status ? "accordion-description active" : "accordion-description"}>
                         <div className="accordion-inner">
                                <p>{process_description}</p>
                         </div>
                </div>
        </div>
        )
}
export default Process