import React from 'react'

const ContactDetails = () => {
  return (
    <div className='contact-details-section'>
               <div className="details-column">
                        <div className="header">
                                   <span></span>
                                   <h3>Visit Our Offices</h3>
                        </div>
                        <h1>Yaya Center</h1>
                         <h3>Argwings Kodhek Rd, Nairobi</h3>
                        <h3>4th Floor - Amari Consulting</h3>

                        <div className="row first">
                                <h4>Call Us: +254 735 042 089</h4>
                        </div>
                        <div className="row">
                                <h4>Email: hello@amariconsult.com</h4>
                        </div>
                        <div className="row">
                                 <h4>Open: Monday - Friday (9am - 6pm)</h4>
                        </div>
               </div>
               <div className="map-column">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15955.20980824536!2d36.7883582!3d-1.2929716!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f118fb0a9b1a1%3A0x490a3d8bf7208d91!2sAMARI%20CONSULTING%20LTD!5e0!3m2!1sen!2ske!4v1678879402160!5m2!1sen!2ske" width="600" height="450" allowfullscreen="" loading="lazy" title="Amari Consulting Map" referrerpolicy="no-referrer-when-downgrade"></iframe>
               </div>
    </div>
  )
}

export default ContactDetails