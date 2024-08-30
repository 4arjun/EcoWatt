import React from 'react'
import GaugeComponent from 'react-gauge-component'

const Home = () => {
  return (
    <>
    <div className='flex w-[100%] h-full mt-16'>
      <div id='overview-card' className=' h-[400px] m-5 rounded-lg'>
        <div id='title' className='flex gap-2'>
            <h1 className='text-xl'>Real-time stats</h1>
            <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 24 24"><path fill="currentColor" d="M20 12a2 2 0 0 0-.703.133l-2.398-1.963c.059-.214.101-.436.101-.67C17 8.114 15.886 7 14.5 7S12 8.114 12 9.5c0 .396.1.765.262 1.097l-2.909 3.438A2 2 0 0 0 9 14c-.179 0-.348.03-.512.074l-2.563-2.563C5.97 11.348 6 11.179 6 11c0-1.108-.892-2-2-2s-2 .892-2 2s.892 2 2 2c.179 0 .348-.03.512-.074l2.563 2.563A2 2 0 0 0 7 16c0 1.108.892 2 2 2s2-.892 2-2c0-.237-.048-.46-.123-.671l2.913-3.442c.227.066.462.113.71.113a2.5 2.5 0 0 0 1.133-.281l2.399 1.963A2 2 0 0 0 18 14c0 1.108.892 2 2 2s2-.892 2-2s-.892-2-2-2"/></svg>
        </div>
        <div className="stats stats-vertical shadow w-[400px]">
            <div className="stat">
              <div className="stat-title">RMS Current</div>
              <div className="stat-value">2.00 </div>
              <div className="stat-desc">Ampere</div>
            </div>

            <div className="stat">
              <div className="stat-title">RMS Power</div>
              <div className="stat-value">15.47</div>
              <div className="stat-desc">Watt</div>
            </div>

            <div className="stat">
              <div className="stat-title">PEAK</div>
              <div className="stat-value">25.37</div>
              <div className="stat-desc">Watt</div>
            </div>
            <div className="stat">
              <div className="stat-title">UNITS</div>
              <div className="stat-value">58.00</div>
              <div className="stat-desc">KW/hr</div>
            </div>
        </div>
      </div>

      <div id='report-card' className='m-5 rounded-lg h-[400px]'>
        <div id='title' className='flex gap-2'>
            <h1 className='text-xl'>Todays Report</h1>
            <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path stroke-dasharray="64" stroke-dashoffset="64" d="M12 3c4.97 0 9 4.03 9 9c0 4.97 -4.03 9 -9 9c-4.97 0 -9 -4.03 -9 -9c0 -4.97 4.03 -9 9 -9Z"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"/></path><path stroke-dasharray="8" stroke-dashoffset="8" d="M12 12h-5.5"><animate fill="freeze" attributeName="stroke-dashoffset" begin="1.3s" dur="0.2s" values="8;0"/><animateTransform attributeName="transform" begin="1.3s" dur="15s" repeatCount="indefinite" type="rotate" values="0 12 12;15 12 12;165 12 12;65 12 12;115 12 12;165 12 12;165 12 12;165 12 12;90 12 12;115 12 12;115 12 12;15 12 12;0 12 12"/></path></g><g fill="currentColor"><path fill-opacity="0" d="M12 21C9.41 21 7.15 20.79 5.94 19L12 21L18.06 19C16.85 20.79 14.59 21 12 21Z"><animate fill="freeze" attributeName="d" begin="0.6s" dur="0.4s" values="M12 21C9.41 21 7.15 20.79 5.94 19L12 21L18.06 19C16.85 20.79 14.59 21 12 21Z;M12 16C9.41 16 7.15 17.21 5.94 19L12 21L18.06 19C16.85 17.21 14.59 16 12 16Z"/><set fill="freeze" attributeName="fill-opacity" begin="0.6s" to="1"/></path><circle cx="7" cy="12" r="0" transform="rotate(15 12 12)"><animate fill="freeze" attributeName="r" begin="0.9s" dur="0.2s" values="0;1"/></circle><circle cx="7" cy="12" r="0" transform="rotate(65 12 12)"><animate fill="freeze" attributeName="r" begin="0.95s" dur="0.2s" values="0;1"/></circle><circle cx="7" cy="12" r="0" transform="rotate(115 12 12)"><animate fill="freeze" attributeName="r" begin="1s" dur="0.2s" values="0;1"/></circle><circle cx="7" cy="12" r="0" transform="rotate(165 12 12)"><animate fill="freeze" attributeName="r" begin="1.05s" dur="0.2s" values="0;1"/></circle><circle cx="12" cy="12" r="0"><animate fill="freeze" attributeName="r" begin="1.3s" dur="0.2s" values="0;2"/></circle></g></svg>
        </div>
        <div className="stats stats-vertical shadow w-[500px]">
            <div className="stat">
              <div className="stat-title">Consumption</div>
              <div className="stat-value"><GaugeComponent /></div>
              <div className="stat-desc">Watt</div>
            </div>
            <div className="stat">
              <div className="stat-title">Insights</div>
              <div className="stat-desc">20% less than yesterdays consumptions</div>
            </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Home
