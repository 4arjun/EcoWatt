import React from 'react'

const DashNavbar = () => {
  return (
    <div className="w-screen h-[10%] bg-slate-500 justify-center items-center">
  <div className="flex items-center h-full ml-5 justify-between">
    <div id='main-logo' className='items-center justify-center' >
        <h1 className='text-3xl'>AmPay</h1>
    </div>
    <div id='profile-section' className='mr-5 rounded-full items-center justify-center'>
        <img className='h-14 rounded-full' src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"  alt="profile-pic" />
    </div>
    
    
  </div>
  <div className="flex-none gap-2">
  </div>
</div>
  )
}

export default DashNavbar
