import React, { useState } from 'react'
import Home from './pages/Home';
<<<<<<< Updated upstream
import MyMap from './pages/myMap';
=======
import Analytics from './pages/Analytics';
>>>>>>> Stashed changes

const Sidebar = () => {
    const [home , setHome] = useState(true);
    const [analy , setanaly] = useState(false);
    const [exp , setexp] = useState(false);

    const onHomeClick = (e)=> {
        setHome(true)
        setanaly(false)
        setexp(false)
    }
    const onAnalyClick = (e)=> {
        setHome(false)
        setanaly(true)
        setexp(false)
    }
    const onExpClick = (e)=> {
        setHome(false)
        setanaly(false)
        setexp(true)
    }
    

  return (
    <div className='flex w-[100%]'>
        <div id='side-navigation' className='flex flex-col w-1/6 bg-black'>
          <button className={`btn  ${home?"bg-primary":""} mt-16`} onClick={onHomeClick}>
          <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="currentColor" d="M6 19h3v-6h6v6h3v-9l-6-4.5L6 10zm-2 2V9l8-6l8 6v12h-7v-6h-2v6zm8-8.75"/></svg>
            Home</button>
          <button className={`btn ${analy?"bg-primary":""}`} onClick={onAnalyClick}>
          <svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" viewBox="0 0 32 32"><path fill="currentColor" d="M4 2H2v26a2 2 0 0 0 2 2h26v-2H4Z"/><path fill="currentColor" d="M30 9h-7v2h3.59L19 18.59l-4.29-4.3a1 1 0 0 0-1.42 0L6 21.59L7.41 23L14 16.41l4.29 4.3a1 1 0 0 0 1.42 0l8.29-8.3V16h2Z"/></svg>
            Analytics</button>
          <button className={`btn ${exp?"bg-primary":""}`} onClick={onExpClick}>
          <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 24 24"><path fill="currentColor" d="M6.5 17.5L14 14l3.5-7.5L10 10zM12 13q-.425 0-.712-.288T11 12t.288-.712T12 11t.713.288T13 12t-.288.713T12 13m0 9q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m0-8"/></svg>
            Explore</button>
            
        </div>
        <div id='main-content' className='h-screen overflow-y-scroll w-full'>
            {analy?
            <Analytics/>:<h1>H1</h1>
            }
            {exp?
            <MyMap/>:<h1>404</h1>}
        </div>
    </div>
  )
}

export default Sidebar
