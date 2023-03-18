import React from 'react'
import "../css/services.css"
import { useLocation } from 'react-router-dom'
import Heropart from '../components/Heropart'
import Navigation from '../components/Navigation/Navigation'
import ServicesDistinction from '../components/Services-P/ServicesDistinction'
import HomeServices from "../components/HomeServices"
import Process from "../components/Process"
import { hero_data } from '../data/hero_data'
import Faqs from '../components/Services-P/Faqs'
import Nudge from "../components/Nudge"
import Footer from "../components/Footer"
const Services = () => {
  const locator = useLocation()
  const url = locator.pathname.slice(1, locator.pathname.length -1)
  
  const data = hero_data.find(item => item.url_id === url)
  return (
    <>
            <section id="hero">
                     <Navigation />
                     <Heropart {...data} />
            </section>
            <ServicesDistinction />
            <HomeServices />
            <Process />
            <div className="more-info">
                        <Faqs />
                        <Nudge />
            </div>
            <Footer />
    </>
  )
}

export default Services