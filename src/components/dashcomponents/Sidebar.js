import React, { useState } from 'react'
import Home from './pages/Home';

import MyMap from './pages/myMap';

import Analytics from './pages/Analytics';
import Leaderboard from './pages/Leaderboard';
import ZonalMapping from './pages/ZonalMapping';
import logo from '../../images/Group 27.png';
import CarbonFootPrint from './pages/carbonFootPrint';


const Sidebar = () => {
    const [home , setHome] = useState(true);
    const [analy , setanaly] = useState(false);
    const [exp , setexp] = useState(false);
    const [board , setBoard] = useState(false)
    const [zone , setZone] = useState(false)
    const [footprint , setFootprint] = useState(false);

    const onHomeClick = (e)=> {
        setHome(true)
        setanaly(false)
        setexp(false)
        setBoard(false)
        setZone(false)
        setFootprint(false)
    }
    const onAnalyClick = (e)=> {
        setHome(false)
        setanaly(true)
        setexp(false)
        setBoard(false)
        setZone(false)
        setFootprint(false)
    }
    const onExpClick = (e)=> {
        setHome(false)
        setanaly(false)
        setexp(true)
        setBoard(false)
        setZone(false)
        setFootprint(false)
    }
    const onBoardClick = (e)=> {
      setBoard(true)
      setHome(false)
      setanaly(false)
      setexp(false)
      setZone(false)
      setFootprint(false)
    }
    const onZoneClick = (e)=> {
      setBoard(false)
      setHome(false)
      setanaly(false)
      setexp(false)
      setZone(true)
      setFootprint(false)
    }
    const onFootprintClick = (e)=> {
      setBoard(false)
      setHome(false)
      setanaly(false)
      setexp(false)
      setZone(false)
      setFootprint(true)
    }
    

  return (
    <div className='flex w-[100%]'>
        <div id='side-navigation' className='flex flex-col w-1/6 bg-black'>
          <div id='logo-container' className='w-full mt-5 flex ml-5'>
            <img src={logo} alt="" width={50}/>
          </div>
          <button className={`btn  ${home?"bg-primary":""} mt-5`} onClick={onHomeClick}>
          <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="currentColor" d="M6 19h3v-6h6v6h3v-9l-6-4.5L6 10zm-2 2V9l8-6l8 6v12h-7v-6h-2v6zm8-8.75"/></svg>
            Home</button>
          <button className={`btn ${analy?"bg-primary":""}`} onClick={onAnalyClick}>
          <svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" viewBox="0 0 32 32"><path fill="currentColor" d="M4 2H2v26a2 2 0 0 0 2 2h26v-2H4Z"/><path fill="currentColor" d="M30 9h-7v2h3.59L19 18.59l-4.29-4.3a1 1 0 0 0-1.42 0L6 21.59L7.41 23L14 16.41l4.29 4.3a1 1 0 0 0 1.42 0l8.29-8.3V16h2Z"/></svg>
            Analytics</button>
            <button className={`btn ${zone?"bg-primary":""}`} onClick={onZoneClick}>
          <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 32 32"><path fill="currentColor" d="M25.142 2.74c.492.071.858.497.858 1v24.52c0 .503-.366.929-.858 1l-12 1.73a1.003 1.003 0 0 1-1.142-1V28H7.052A1.055 1.055 0 0 1 6 26.949V5.052c0-.58.473-1.053 1.052-1.053H12V2.01c0-.614.539-1.086 1.142-.999zM15 17a1 1 0 1 0 0-2a1 1 0 1 0 0 2m-7 9h4V6H8z"/></svg>
          Zone Mapping</button>
          <button className={`btn ${footprint?"bg-primary":""}`} onClick={onFootprintClick}>
          <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 512 512"><path fill="currentColor" d="M246.625 18.375c-11.817-.153-23.918 8.608-29.375 22.438c-6.716 17.02-.85 35.28 13.094 40.78c13.943 5.502 30.69-3.822 37.406-20.843c6.716-17.02.85-35.28-13.094-40.78a22.5 22.5 0 0 0-8.03-1.595zm74.75 15.938c-10.97.006-22.743 6.024-30.78 16.874c-12.25 16.534-11.2 38.06 2.342 48.094c13.544 10.035 34.44 4.754 46.688-11.78c12.25-16.534 11.2-38.06-2.344-48.094c-4.654-3.45-10.16-5.097-15.905-5.093zm67.25 37.53c-10.336-.127-21.542 4.263-30.47 12.907c-15.87 15.368-18.525 38.344-5.936 51.344c12.587 13 35.66 11.086 51.53-4.28c15.87-15.37 18.526-38.345 5.938-51.345c-5.508-5.69-13.024-8.527-21.063-8.626zm-156.438 32.063c-22.51-.28-44.378 6.893-63.5 24C107.65 182.513 48.192 261.012 28.28 386.97C5.023 534.1 186.257 507.523 168.313 428.936c-22.922-100.387 34.13-141.11 108-124.156c32.838 7.54 66.54-4.9 86-40.436c23.402-42.733-7.428-106.817-62.875-139.625c-21.61-12.79-44.74-20.534-67.25-20.814zM449.438 134c-10.52.022-21.654 2.82-32.093 8.625c-27.837 15.48-40.15 46.51-27.47 69.313c12.682 22.802 45.54 28.73 73.376 13.25s40.118-46.51 27.438-69.313c-7.926-14.252-23.717-21.91-41.25-21.875z"/></svg>
            Carbon Footprint</button>
          <button className={`btn ${exp?"bg-primary":""}`} onClick={onExpClick}>
          <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 24 24"><path fill="currentColor" d="M6.5 17.5L14 14l3.5-7.5L10 10zM12 13q-.425 0-.712-.288T11 12t.288-.712T12 11t.713.288T13 12t-.288.713T12 13m0 9q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m0-8"/></svg>
            Explore</button>
          <button className={`btn ${board?"bg-primary":""}`} onClick={onBoardClick}>
          <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 24 24"><path fill="currentColor" d="M12 20q1.875 0 3.188-1.312T16.5 15.5t-1.312-3.187T12 11t-3.187 1.313T7.5 15.5t1.313 3.188T12 20m-2.886-9.165q.48-.314 1.023-.505q.544-.191 1.119-.28L8.98 5.538h-2.5zm5.772 0l2.658-5.297H15.02l-2.183 4.327l.11.22q.523.1 1.012.28q.488.18.928.47m-7.659 8.1q.017-.168.078-.37q.06-.204.176-.43q-.462-.747-.667-1.613t-.106-1.783q0-.75.26-1.424q.259-.673.72-1.211q-.357.061-.629.256q-.27.196-.386.467q-1.115.271-1.739 1.255q-.623.983-.38 2.18q0 1.115.779 1.894q.778.778 1.894.778m9.546 0q1.358-.08 2.292-1.064q.935-.983.935-2.37t-.935-2.37t-2.292-1.065q-.115 0-.23.01q-.116.01-.232.029q.56.706.874 1.572q.315.866.315 1.824t-.314 1.824q-.315.866-.874 1.572q.115.02.23.029q.116.01.231.01M12 21q-.961 0-1.816-.297t-1.553-.855q-.264.089-.556.12t-.6.032q-1.852 0-3.163-1.311T3 15.525q0-1.829 1.277-3.129t3.094-1.34q.212 0 .404.029q.192.028.384.067L4.846 4.539h4.77L12 9.308l2.385-4.77h4.769l-3.27 6.545q.174-.039.357-.058q.182-.02.375-.02q1.836.047 3.11 1.347T21 15.5q0 1.877-1.311 3.189T16.5 20q-.302 0-.587-.032t-.55-.12q-.697.539-1.55.845T12 21M9.114 10.835L6.48 5.538zm5.772 0l2.658-5.297zm-4.447 6.953l.584-1.929l-1.561-1.113h1.929L12 12.712l.61 2.034h1.929l-1.562 1.114l.585 1.929L12 16.6z"/></svg>
            LeaderBoard</button>
          
            
        </div>
        <div id='main-content' className='h-screen overflow-y-scroll w-full overflow-x-hidden'>
            {analy?
            <Analytics/>:home?<Home/>:exp?<MyMap/>:board?<Leaderboard/>:zone?<ZonalMapping/>:footprint?<CarbonFootPrint/>:<h1>404</h1>
            }
        </div>
    </div>
  )
}

export default Sidebar
