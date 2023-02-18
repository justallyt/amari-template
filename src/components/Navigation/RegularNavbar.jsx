import React, { useContext } from 'react'
import logo from "../../assets/Logo.png"
import { IoLogoWhatsapp } from "react-icons/io5"
import { CgMenuRight } from "react-icons/cg"
import { navContext } from './navcontext'

const RegularNavbar = () => {
  const [ sidebarStatus, setSidebarStatus] = useContext(navContext)

  const toggleMenu = () =>{
         setSidebarStatus(!sidebarStatus)
  }

  return (
        <header>
                <div className="inner-row">
                        <div className="header-content">
                                 <div className="logo">
                                         <a href="s">
                                               <img src={logo} alt="" />
                                         </a>
                                 </div>
                                  <nav>
                                          <ul>
                                                 <li><a href="s" className='active'>Home</a></li>
                                                 <li><a href="s">About Us</a></li>
                                                 <li><a href="s">Services</a></li>
                                                 <li><a href="s">Blog</a></li>
                                                 <li><a href="s">Contact Us</a></li>
                                          </ul>

                                          <div className="call-to-action">
                                                   <a href="s"><span><IoLogoWhatsapp /></span> Let's Talk</a>
                                          </div>
                                  </nav>

                                  <div className="mobile-menu-trigger" onClick={toggleMenu}>
                                           <span><CgMenuRight /></span>
                                  </div>
                        </div>
                </div>
        </header>
  )
}

export default RegularNavbar