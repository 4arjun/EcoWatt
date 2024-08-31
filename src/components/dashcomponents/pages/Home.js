import React, {useState,useEffect} from 'react'
import GaugeComponent from 'react-gauge-component'
import './home.css'

const Home = () => {
  const tips = [
  "Did you know? Using a programmable thermostat can help reduce your energy bills by up to 10%.",
  "Consider investing in solar panels to generate your own electricity and reduce your reliance on the grid.",
  "Switching off your computer or putting it to sleep when not in use can save a significant amount of energy.",
  "Using energy-efficient window treatments can help maintain your home’s temperature without over-relying on heating or cooling systems.",
  "Running your dishwasher only when it's full can save water and energy."
];

  useEffect(() => {
    // Request notification permission on component mount
    requestNotificationPermission();
  }, []);

  const handleSendNotification = (e) => {
    e.preventDefault()
    const options = {
      body: 'Limiter Triggered!! Power Supply has been turned off'
    };

    sendNotification('Trigger Warning', options);
  };

  const [currentTip, setCurrentTip] = useState(tips[Math.floor(Math.random() * tips.length)]);

  useEffect(() => {
    generateRandomTip();
    const intervalId = setInterval(generateRandomTip, 60000); // Change the tip every 10 seconds

    return () => clearInterval(intervalId); // Cleanup the interval on component unmount
  }, []);

  const generateRandomTip = () => {
    const randomIndex = Math.floor(Math.random() * tips.length);
    setCurrentTip(tips[randomIndex]);
  };
  return (
    <>
    <div className='flex w-[100%] mt-4 ml-10'>
      <div id='overview-card' className=' h-[600px] m-5 rounded-lg'>
        <div id='title' className='flex gap-2'>
            <h1 className='ml-5 mr-2 mb-3 text-4xl'>Real-time stats</h1>
            <svg xmlns="http://www.w3.org/2000/svg" width="2.5rem" height="2.5rem" viewBox="0 0 24 24"><path fill="currentColor" d="M20 12a2 2 0 0 0-.703.133l-2.398-1.963c.059-.214.101-.436.101-.67C17 8.114 15.886 7 14.5 7S12 8.114 12 9.5c0 .396.1.765.262 1.097l-2.909 3.438A2 2 0 0 0 9 14c-.179 0-.348.03-.512.074l-2.563-2.563C5.97 11.348 6 11.179 6 11c0-1.108-.892-2-2-2s-2 .892-2 2s.892 2 2 2c.179 0 .348-.03.512-.074l2.563 2.563A2 2 0 0 0 7 16c0 1.108.892 2 2 2s2-.892 2-2c0-.237-.048-.46-.123-.671l2.913-3.442c.227.066.462.113.71.113a2.5 2.5 0 0 0 1.133-.281l2.399 1.963A2 2 0 0 0 18 14c0 1.108.892 2 2 2s2-.892 2-2s-.892-2-2-2"/></svg>
        </div>
        <div className="stats stats-vertical shadow w-[400px]">
            <div className="stat p-6">
            <div className='flex text-center justify-around'  >
              <div className="stat-title text-2xl">RMS Current : </div>
              <div>
                <div className="stat-value text-5xl">2.00 </div>
                <div className="stat-desc ml-10">Ampere</div>

              </div>
              
            </div>    
              
            </div>

            <div className="stat p-6">
            <div className='flex text-center justify-around'  >
              <div className="stat-title text-2xl">RMS Power : </div>
              <div>
                <div className="stat-value text-5xl">1.59 </div>
                <div className="stat-desc ml-10">Watt</div>

              </div>
              
            </div>
              
            </div>

            <div className="stat p-6">
            <div className='flex text-center justify-around'  >
              <div className="stat-title text-2xl">Peak : </div>
              <div>
                <div className="stat-value text-5xl">2.57 </div>
                <div className="stat-desc ml-10">Watt</div>

              </div>
              
            </div>
              
            </div>
            <div className="stat p-6">
            <div className='flex text-center justify-around'  >
              <div className="stat-title text-2xl">Units : </div>
              <div>
                <div className="stat-value text-5xl">15.70 </div>
                <div className="stat-desc ml-10">KWH</div>

              </div>
              
            </div>
              
            </div>
        </div>
      </div>

      <div id='report-card' className='m-5 ml-10 rounded-lg'>
        <div id='title' className='flex gap-2'>
            <h1 className='ml-5 mr-2 mb-3 text-4xl'>Todays Report</h1>
            <svg xmlns="http://www.w3.org/2000/svg" width="2.2rem" height="2.2rem" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path stroke-dasharray="64" stroke-dashoffset="64" d="M12 3c4.97 0 9 4.03 9 9c0 4.97 -4.03 9 -9 9c-4.97 0 -9 -4.03 -9 -9c0 -4.97 4.03 -9 9 -9Z"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"/></path><path stroke-dasharray="8" stroke-dashoffset="8" d="M12 12h-5.5"><animate fill="freeze" attributeName="stroke-dashoffset" begin="1.3s" dur="0.2s" values="8;0"/><animateTransform attributeName="transform" begin="1.3s" dur="15s" repeatCount="indefinite" type="rotate" values="0 12 12;15 12 12;165 12 12;65 12 12;115 12 12;165 12 12;165 12 12;165 12 12;90 12 12;115 12 12;115 12 12;15 12 12;0 12 12"/></path></g><g fill="currentColor"><path fill-opacity="0" d="M12 21C9.41 21 7.15 20.79 5.94 19L12 21L18.06 19C16.85 20.79 14.59 21 12 21Z"><animate fill="freeze" attributeName="d" begin="0.6s" dur="0.4s" values="M12 21C9.41 21 7.15 20.79 5.94 19L12 21L18.06 19C16.85 20.79 14.59 21 12 21Z;M12 16C9.41 16 7.15 17.21 5.94 19L12 21L18.06 19C16.85 17.21 14.59 16 12 16Z"/><set fill="freeze" attributeName="fill-opacity" begin="0.6s" to="1"/></path><circle cx="7" cy="12" r="0" transform="rotate(15 12 12)"><animate fill="freeze" attributeName="r" begin="0.9s" dur="0.2s" values="0;1"/></circle><circle cx="7" cy="12" r="0" transform="rotate(65 12 12)"><animate fill="freeze" attributeName="r" begin="0.95s" dur="0.2s" values="0;1"/></circle><circle cx="7" cy="12" r="0" transform="rotate(115 12 12)"><animate fill="freeze" attributeName="r" begin="1s" dur="0.2s" values="0;1"/></circle><circle cx="7" cy="12" r="0" transform="rotate(165 12 12)"><animate fill="freeze" attributeName="r" begin="1.05s" dur="0.2s" values="0;1"/></circle><circle cx="12" cy="12" r="0"><animate fill="freeze" attributeName="r" begin="1.3s" dur="0.2s" values="0;2"/></circle></g></svg>
        </div>
        <div className="stats stats-vertical flex-col items-center shadow w-[600px] h-[550px]">
            <div className="stat">
              <div className="stat-title text-4xl">Consumption</div>
              <div className="stat-value"><GaugeComponent /></div>
              <div className="stat-desc text-xl">KWH</div>
            </div>
            <div className="stat flex-col gap-1">
              <div className="stat-title text-1xl">Change (24h)</div>
              <div className="stat-desc">+4.37%</div>
              <div className="stat-desc">-1.67% this month</div>
            </div>
        </div>
      </div>
      <div id='limiter' className='m-5 rounded-lg'>
        <div id='limiter-title' className='flex gap-2'>
          <h1 className='mr-2 mb-3 text-4xl ml-5' >Set Limiter value</h1>
          <svg xmlns="http://www.w3.org/2000/svg" width="2.5rem" height="2.5rem" viewBox="0 0 24 24"><path fill="currentColor" d="M18 15c0 2.6-1.2 4.9-3.1 6.3l-.5-.5l-2.1-2.1l1.4-1.4l1.2 1.2c.5-.7.9-1.6 1-2.5H14v-2h1.9c-.2-.9-.5-1.7-1-2.5l-1.2 1.2l-1.4-1.4l1.2-1.2c-.7-.5-1.6-.9-2.5-1V11H9V9.1c-.9.2-1.7.5-2.5 1l3 3c.2 0 .3-.1.5-.1a2 2 0 1 1 0 4c-1.11 0-2-.89-2-2c0-.2 0-.3.1-.5l-3-3c-.5.7-.9 1.6-1 2.5H6v2H4.1c.2.9.5 1.7 1 2.5l1.2-1.2l1.4 1.4l-2.6 2.6C3.2 19.9 2 17.6 2 15c0-4.42 3.58-8 8-8s8 3.58 8 8m5-10c0-1.66-1.34-3-3-3s-3 1.34-3 3c0 1.3.84 2.4 2 2.82V11h2V7.82C22.16 7.4 23 6.3 23 5m-3 1c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1"/></svg>
        </div>
        <div className='flex-col'>
        <div className='stats w-[400px] flex flex-col mb-14'>
          <div className='stat stat-desc text-2xl'>Stop supply after a limit.</div>
          <div className='stat flex'>
        <form className='flex flex-col h-full justify-center gap-5 w-full'>
          <label for="limit"></label>
          <select name="limitter_value" id="limit_value" className='w-full text-2xl rounded-lg'>
            <option value="10">10KW/hr</option>
            <option value="20">20KW/hr</option>
            <option value="30">30KW/hr</option>
            <option value="40">40KW/hr</option>
          </select>
          <button className='btn btn-primary mb-8' onClick={handleSendNotification}>Submit</button>
        </form>
        </div>
        </div>
        <h1 className=' mb-3 text-4xl' >Predicted Bill</h1>
        <div className="stats stats-vertical shadow  w-[400px]">
          
                <div className="stat">
                    <div className="stat-title">PREDICTED</div>
                    <div className="stat-value flex items-center justify-center">2550
                        <svg   xmlns="http://www.w3.org/2000/svg" width="1.8rem" height="1.6rem" viewBox="0 0 928 1408"><path fill="currentColor" d="M898 342v102q0 14-9 23t-23 9H698q-23 144-129 234T293 820q167 178 459 536q14 16 4 34q-8 18-29 18H532q-16 0-25-12Q201 1029 9 825q-9-9-9-22V676q0-13 9.5-22.5T32 644h112q132 0 212.5-43T459 476H32q-14 0-23-9t-9-23V342q0-14 9-23t23-9h413q-57-113-268-113H32q-13 0-22.5-9.5T0 165V32Q0 18 9 9t23-9h832q14 0 23 9t9 23v102q0 14-9 23t-23 9H631q47 61 64 144h171q14 0 23 9t9 23"/></svg>
                    </div>
                    <div className="stat-desc">For August</div>
                </div>
                <div className="stat">
                    <div className="stat-title">PREDICTED</div>
                    <div className="stat-value flex items-center justify-center">75
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.8rem" height="1.8rem" viewBox="0 0 928 1408"><path fill="currentColor" d="M898 342v102q0 14-9 23t-23 9H698q-23 144-129 234T293 820q167 178 459 536q14 16 4 34q-8 18-29 18H532q-16 0-25-12Q201 1029 9 825q-9-9-9-22V676q0-13 9.5-22.5T32 644h112q132 0 212.5-43T459 476H32q-14 0-23-9t-9-23V342q0-14 9-23t23-9h413q-57-113-268-113H32q-13 0-22.5-9.5T0 165V32Q0 18 9 9t23-9h832q14 0 23 9t9 23v102q0 14-9 23t-23 9H631q47 61 64 144h171q14 0 23 9t9 23"/></svg>
                    </div>
                    <div className="stat-desc mb-3">For Today</div>
                </div>
            </div>
        </div>
        
        
      </div>

    </div>
    <div id='tips-container' className='flex gap-2 h-[20%] ml-10 items-center'>
      <svg xmlns="http://www.w3.org/2000/svg" width="3rem" height="3rem" viewBox="0 0 24 24"><path fill="currentColor" d="M7 20h4c0 1.1-.9 2-2 2s-2-.9-2-2m-2-1h8v-2H5zm11.5-9.5c0 3.82-2.66 5.86-3.77 6.5H5.27c-1.11-.64-3.77-2.68-3.77-6.5C1.5 5.36 4.86 2 9 2s7.5 3.36 7.5 7.5m-2 0C14.5 6.47 12.03 4 9 4S3.5 6.47 3.5 9.5c0 2.47 1.49 3.89 2.35 4.5h6.3c.86-.61 2.35-2.03 2.35-4.5m6.87-2.13L20 8l1.37.63L22 10l.63-1.37L24 8l-1.37-.63L22 6zM19 6l.94-2.06L22 3l-2.06-.94L19 0l-.94 2.06L16 3l2.06.94z"/></svg>
      <p className='text-2xl'>{currentTip}</p>
    </div>
   
    </>
  )
}

const requestNotificationPermission = () => {
  if (Notification.permission !== 'granted') {
    Notification.requestPermission().then((permission) => {
      if (permission === 'granted') {
        console.log('Notification permission granted.');
      }
    });
  }
};

const sendNotification = (title, options) => {
  if (Notification.permission === 'granted') {
    new Notification(title, options);
  } else {
    console.log('Notification permissions not granted!');
  }
};

export default Home
