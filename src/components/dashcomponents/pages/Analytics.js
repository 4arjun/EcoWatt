import React, { useState } from 'react'
import LineChart from '../LineChart'
import Zone from './Zone'
import PolarAreaChart from './PolarAreaChart'
import './Analytics.css'

const Analytics = () => {
    const [change , setChange] = useState(false);
    const onchangeClick = (e)=>{
        if (change){
            setChange(false);
        }else{
            setChange(true);
        }
    }
  return (
    <div id='main-analytics-container' className='flex flex-col gap-6 w-full m-16'>
        <div id='row-1' className='flex gap-5 w-full h-1/2'>
            <div id='chart-container' className='ml-12 h-[680px] w-[1200px] mb-8'>
                <LineChart/>
            </div>
            
        </div>

        
    </div>
  )
}

export default Analytics
