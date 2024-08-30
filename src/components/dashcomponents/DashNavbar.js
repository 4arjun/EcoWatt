import React from 'react'
import Logout from './Logout'
import AccountButton from './AccountButton'
import Toggle from './Toggle'
import Drawer from './Drawer'


const DashNavbar = () => {
  return (
    <div className="w-screen h-[10%] bg-slate-500 justify-center items-center">
  <div className="flex items-center h-full ml-5 justify-around">
    <div id='main-logo' className='flex justify-start w-3/4' >
        <h1 className='text-3xl'>AmPay</h1>
        {/* <Drawer/> */}
    </div>
    <div id='right-buttons' className='flex mr-20 w-1/4 gap-5'>
        <div id='toggle-dark'>
            <Toggle/>
        </div>
        <div id='account-button'>
            <AccountButton/>
        </div>
        <div id='logout-button'>
            <Logout/>
        </div>
        
    </div>

    
    
  </div>
  <div className="flex-none gap-2">
  </div>
</div>
  )
}

export default DashNavbar
