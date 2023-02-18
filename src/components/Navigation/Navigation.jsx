import React, { useState } from 'react'
import { navContext } from './navcontext'
import RegularNavbar from "./RegularNavbar"
import ScrolledNavbar from "./ScrolledNavbar"
import Sidebar from './Sidebar'
const Navigation = () => {
  const [sidebarStatus, setSidebarStatus] = useState(false)
  return (
    <navContext.Provider value={[sidebarStatus, setSidebarStatus]}>
           <RegularNavbar />
           <ScrolledNavbar />
           <Sidebar />
    </navContext.Provider>
  )
}

export default Navigation