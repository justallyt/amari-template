import React from 'react'
import "../css/home.css"
import Navigation from "../components/Navigation/Navigation"
import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'
import Spacer from '../components/Spacer'
import HomeServices from '../components/HomeServices'
import Benefits from '../components/Benefits'
const Home = () => {
  return (
    <>
          <section className="landing">
                   <Navigation />
                   <HeroSection />
          </section>
          <Spacer pad={'40px'} />
          <AboutSection />
          <HomeServices />
          <Benefits />
    </>
  )
}

export default Home