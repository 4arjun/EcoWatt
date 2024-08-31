import React from 'react'
import LineChart from '../LineChart'
import Zone from './Zone'


const Analytics = () => {
  return (
    <div id='main-analytics-container' className='flex flex-col gap-6 w-full m-16'>
        <div id='row-1' className='flex gap-5 w-full h-1/2'>
            <div id='chart-container' className='w-1/2'>
                <LineChart/>
            </div>
            <div className="stats stats-vertical shadow  w-[30%]">
                <div className="stat">
                    <div className="stat-title">COST PREDICTION</div>
                    <div className="stat-value flex items-center justify-center">31
                        <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 928 1408"><path fill="currentColor" d="M898 342v102q0 14-9 23t-23 9H698q-23 144-129 234T293 820q167 178 459 536q14 16 4 34q-8 18-29 18H532q-16 0-25-12Q201 1029 9 825q-9-9-9-22V676q0-13 9.5-22.5T32 644h112q132 0 212.5-43T459 476H32q-14 0-23-9t-9-23V342q0-14 9-23t23-9h413q-57-113-268-113H32q-13 0-22.5-9.5T0 165V32Q0 18 9 9t23-9h832q14 0 23 9t9 23v102q0 14-9 23t-23 9H631q47 61 64 144h171q14 0 23 9t9 23"/></svg>
                    </div>
                    <div className="stat-desc">Projection for August</div>
                </div>
                <div className="stat">
                    <div className="stat-title">COST PREDICTION</div>
                    <div className="stat-value flex items-center justify-center">31
                        <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 928 1408"><path fill="currentColor" d="M898 342v102q0 14-9 23t-23 9H698q-23 144-129 234T293 820q167 178 459 536q14 16 4 34q-8 18-29 18H532q-16 0-25-12Q201 1029 9 825q-9-9-9-22V676q0-13 9.5-22.5T32 644h112q132 0 212.5-43T459 476H32q-14 0-23-9t-9-23V342q0-14 9-23t23-9h413q-57-113-268-113H32q-13 0-22.5-9.5T0 165V32Q0 18 9 9t23-9h832q14 0 23 9t9 23v102q0 14-9 23t-23 9H631q47 61 64 144h171q14 0 23 9t9 23"/></svg>
                    </div>
                    <div className="stat-desc">Projection for Today</div>
                </div>
            </div>
        </div>
        <div id='row-2' className='flex gap-5 w-full'>
            <div className="stats stats-vertical shadow w-[30%]">
                <div className='stat '>
                    <div className="stat-title">CARBON FOOTPRINT</div>
                    <div className="stat-desc">Projection for August</div>
                </div>
                <div className="stat">
                    <div className='stat-desc flex justify-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="3rem" height="3rem" viewBox="0 0 512 512"><path fill="currentColor" d="M246.625 18.375c-11.817-.153-23.918 8.608-29.375 22.438c-6.716 17.02-.85 35.28 13.094 40.78c13.943 5.502 30.69-3.822 37.406-20.843c6.716-17.02.85-35.28-13.094-40.78a22.5 22.5 0 0 0-8.03-1.595zm74.75 15.938c-10.97.006-22.743 6.024-30.78 16.874c-12.25 16.534-11.2 38.06 2.342 48.094c13.544 10.035 34.44 4.754 46.688-11.78c12.25-16.534 11.2-38.06-2.344-48.094c-4.654-3.45-10.16-5.097-15.905-5.093zm67.25 37.53c-10.336-.127-21.542 4.263-30.47 12.907c-15.87 15.368-18.525 38.344-5.936 51.344c12.587 13 35.66 11.086 51.53-4.28c15.87-15.37 18.526-38.345 5.938-51.345c-5.508-5.69-13.024-8.527-21.063-8.626zm-156.438 32.063c-22.51-.28-44.378 6.893-63.5 24C107.65 182.513 48.192 261.012 28.28 386.97C5.023 534.1 186.257 507.523 168.313 428.936c-22.922-100.387 34.13-141.11 108-124.156c32.838 7.54 66.54-4.9 86-40.436c23.402-42.733-7.428-106.817-62.875-139.625c-21.61-12.79-44.74-20.534-67.25-20.814zM449.438 134c-10.52.022-21.654 2.82-32.093 8.625c-27.837 15.48-40.15 46.51-27.47 69.313c12.682 22.802 45.54 28.73 73.376 13.25s40.118-46.51 27.438-69.313c-7.926-14.252-23.717-21.91-41.25-21.875z"/></svg>
                    </div>
                    <div className="stat-value flex items-center justify-center">0.68 Kg CO<sub>2</sub>
                    </div>
                    
                </div>
            </div>
            <div id='pie-container' className='w-1/2'>
                <Zone/>
            </div>
        </div>
    </div>
  )
}

export default Analytics
