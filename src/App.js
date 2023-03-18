import './App.css';
import Aos from 'aos';
import 'aos/dist/aos.css'
import Home from './pages/Home';
import { useLayoutEffect, useEffect } from 'react';
import { Routes, Route } from "react-router-dom"
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import { useLocation } from 'react-router-dom';
function App() {
  const location = useLocation()

  const alwaysOnTopPage = () =>{
       window.scrollTo(0, 0);
  }
  useEffect(()=>{
         alwaysOnTopPage()
  },[location])

  useLayoutEffect(()=>{
      Aos.init({
           duration: 1500,
           once: true,
     })
  }, [])
  return (
    <>
         <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about-us/' element={<About />} />
                <Route path='/services/' element={<Services />} />
                <Route path='/portfolio/' element={<Portfolio />} />
                <Route path='/contact-us/' element={<Contact />} />
         </Routes>
    </>
  );
}

export default App;
