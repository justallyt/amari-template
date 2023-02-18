import React, { useContext, useEffect, useRef } from 'react'
import logo from "../../assets/Logo.png"
import { CgClose } from "react-icons/cg"
import { IoLogoWhatsapp } from "react-icons/io5"
import { CgMenuRight } from "react-icons/cg"
import { navContext } from './navcontext'
import { gsap } from 'gsap'

const Sidebar = () => {
   const [status, setStatus] = useContext(navContext)
   const sidebarContainer = useRef()
   const overlay = useRef()
   const sidebarBox = useRef()

   const removeMenu = () =>{
          setStatus(!status);
   }
   useEffect(() =>{
          if(status){
                sidebarContainer.current.classList.add('active')
                sidebarBox.current.classList.add('active')
                overlay.current.classList.add('active')

                gsap.to(overlay.current, {
                        duration: 1,
                        y: '100%',
                        ease: "power2", 
                   })
                gsap.to(sidebarBox.current, {
                       duration: 1,
                       x: '0',
                       ease: 'power2',
                       delay: 1
                })
          }

          if(!status && sidebarContainer.current.classList.contains('active')){
                gsap.to(sidebarBox.current, {
                        duration: 1,
                        x: '-100%',
                        ease: 'power2',
                 })
                 gsap.to(overlay.current, {
                        duration: 1,
                        y: '0',
                        ease: 'power2',
                        delay: 1
               })
               setTimeout(()=>{
                     sidebarBox.current.classList.remove("active")
                     overlay.current.classList.remove("active")
                     sidebarContainer.current.classList.remove('active')
               }, 2000)
          }
   }, [status])
  return (
    <div ref={sidebarContainer} className='sidebar-container'>
            <div ref={overlay} className="sidebar-overlay"></div>
            <div ref={sidebarBox} className="sidebar-content">
                    <div className="inner-row">
                             <div className="logo">
                                     <a href="s">
                                             <img src={logo} alt="" />
                                     </a>
                                     <span onClick={removeMenu}><CgClose /></span>
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

                                  <div className="mobile-menu-trigger">
                                           <span><CgMenuRight /></span>
                                  </div>
                    </div>
            </div>
    </div>
  )
}

export default Sidebar