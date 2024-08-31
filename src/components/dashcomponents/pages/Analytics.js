import React from 'react'
import LineChart from '../LineChart'
import Zone from './Zone'


const Analytics = () => {
  return (
    <div id='main-analytics-container' className='flex flex-col gap-6 w-full m-16'>
        <div id='row-1' className='flex gap-5 w-full h-1/2'>
            <div id='chart-container' className='ml-12 h-[680px] w-[1200px] mb-8'>
                <LineChart/>
            </div>
            
        </div>
        <div id='row-2' className='flex  w-full'>
            <div className="stats  shadow w-[30%]">
                    <div className="stat-title text-3xl">CARBON FOOTPRINT</div>
                    <div className="stat-value flex items-center justify-center">0.68 Kg CO<sub>2</sub> </div>
                    <div className="stat-desc">Projection for August</div>   
            </div>
            <div id='pie-container' className='w-[800px] order-first'>
                <Zone/>
            </div>
        </div>
    </div>
  )
}

export default Analytics
