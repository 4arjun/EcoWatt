import React from 'react'
import DashNavbar from './dashcomponents/DashNavbar'
import NavBar from './NavBar/NavBar'
import Sidebar from './dashcomponents/Sidebar'

const Dashboard2 = () => {
  return (
    <div id='main-container' className='w-screen h-screen flex'>
        {/* <DashNavbar/> */}
        <NavBar/>
        <Sidebar/>
      
    </div>
  )
}

export default Dashboard2
