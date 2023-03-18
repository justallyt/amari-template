import React from 'react'
import "../css/contact.css"
import Navigation from "../components/Navigation/Navigation"
import Heropart from '../components/Heropart'
import { useLocation } from 'react-router-dom'
import { hero_data } from '../data/hero_data'
import ContactBody from '../components/Contact-Us/ContactBody'
import ContactDetails from '../components/Contact-Us/ContactDetails'
import Footer from "../components/Footer"
const Contact = () => {
    const locator = useLocation()
   const url = locator.pathname.slice(1, locator.pathname.length -1)
   
   const data = hero_data.find(item => item.url_id === url)
  return (
    <>
          <section id="hero">
                   <Navigation />
                   <Heropart  {...data} />
          </section>
          <ContactBody />
          <ContactDetails />
          <Footer />
    </>
  )
}

export default Contact