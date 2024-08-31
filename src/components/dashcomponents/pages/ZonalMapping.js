import React from 'react'
import "../stylesheets/ZonalMapping.css"

const ZonalMapping = () => {
  return (
    <div id='plan-main-container' className='h-full w-full flex flex-col'>
      <div id='row-1' className=' flex  w-full justify-around relative top-[18rem]'>
        <div id='button-1' className='dropdown dropdown-left'>
            <button tabIndex={0} role="button"><svg xmlns="http://www.w3.org/2000/svg" width="3rem" height="3rem" viewBox="0 0 48 48"><circle cx="24" cy="24" r="21" fill="#2196f3"/><path fill="#fff" d="M22 22h4v11h-4z"/><circle cx="24" cy="16.5" r="2.5" fill="#fff"/></svg></button>
            <div
              tabIndex={0}
              className="dropdown-content bg-slate-700 h-[300px] rounded-lg w-64 p-2 text-white">
              <div className="card-body flex flex-col w-full">
                <h1 className="card-title">Room 1</h1>
                <h2>RMS Power: 23 Watts</h2>
                <h2>Units: 3KW/hr</h2>
              </div>
            </div>
        </div>

        <div id='button-2' className='dropdown dropdown-right'>
            <button tabIndex={1}><svg xmlns="http://www.w3.org/2000/svg" width="3rem" height="3rem" viewBox="0 0 48 48"><circle cx="24" cy="24" r="21" fill="#2196f3"/><path fill="#fff" d="M22 22h4v11h-4z"/><circle cx="24" cy="16.5" r="2.5" fill="#fff"/></svg></button>
            <div
              tabIndex={1}
              className="dropdown-content card card-compact bg-white w-64 p-2">
              <div className="card-body">
                <h3 className="card-title">Room 2</h3>
                <p>you can use any element as a dropdown.</p>
              </div>
            </div>
        </div>
      </div>
      <div id='row-2'className='flex relative justify-center right-[18rem] top-[35rem]'>
        <div id='button-3' className='dropdown dropdown-left'>
            <button tabIndex={2}><svg xmlns="http://www.w3.org/2000/svg" width="3rem" height="3rem" viewBox="0 0 48 48"><circle cx="24" cy="24" r="21" fill="#2196f3"/><path fill="#fff" d="M22 22h4v11h-4z"/><circle cx="24" cy="16.5" r="2.5" fill="#fff"/></svg></button>
            <div
              tabIndex={2}
              className="dropdown-content card card-compact bg-slate-500 w-64 p-2">
              <div className="card-body">
                <h3 className="card-title">Room 2</h3>
                <p>you can use any element as a dropdown.</p>
              </div>
            </div>
        </div>
      </div>
    </div>

  )
}

export default ZonalMapping
