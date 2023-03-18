import React from 'react'
import "../css/about.css"
import Heropart from '../components/Heropart'
import Navigation from "../components/Navigation/Navigation"
import AboutDescription from '../components/About-Us/AboutDescription'
import Partners from "../components/Partners"
import Footer from "../components/Footer"
import { hero_data } from '../data/hero_data'
import { useLocation } from 'react-router-dom'
const About = () => { 
  const locator = useLocation()
  const url = locator.pathname.slice(1, locator.pathname.length -1)

   const data = hero_data.find(item => item.url_id === url)
  return (
    <>
          <section id="hero">
                 <Navigation />
                 <Heropart  {...data} />
          </section>
          <AboutDescription />
          <Partners />
          <Footer />
    </>
  )
}

export default About