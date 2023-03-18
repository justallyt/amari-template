import React from 'react'
import "../css/portfolio.css"
import Navigation from '../components/Navigation/Navigation'
import Heropart from '../components/Heropart'
import { useLocation } from 'react-router-dom'
import { hero_data } from '../data/hero_data'
import PortfolioTypes from '../components/Portfolio/PortfolioTypes'
import Nudge from "../components/Nudge"
import Footer from "../components/Footer"

const Portfolio = () => {
  const locator = useLocation()
  const url = locator.pathname.slice(1, locator.pathname.length -1)
  
  const data = hero_data.find(item => item.url_id === url)
  return (
    <>
           <section id="hero">
                     <Navigation />
                     <Heropart {...data} />
            </section>
            <section id="portfolio-body">
                    <PortfolioTypes />
                    <Nudge />
            </section>
            <Footer />
    </>
  )
}

export default Portfolio