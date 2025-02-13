import React, { useState,useEffect } from 'react'
import "../stylesheets/ZonalMapping.css"
import logo from '../../../images/Group 27.png';
import axios from 'axios';
import baseUrl from '../../../urls';


const ZonalMapping = () => {
    const [toggle1 , setToggle1] = useState(true)
    const [toggle2 , setToggle2] = useState(true)
    const [toggle3 , setToggle3] = useState(true)
    const [main , setMain] = useState(true)


    // 


    const handleToggle1 = (e)=> {
        {toggle1? setToggle1(false): setToggle1(true)}
    }
    const handleToggle2 = (e)=> {
        {toggle2? setToggle2(false): setToggle2(true)}
    }
    const handleToggle3 = (e)=> {
        {toggle1? setToggle3(false): setToggle3(true)}
    }
    const togglemain = (e)=> {
        if (main){
            alert("Power across all rooms will be terminated");
            setMain(false)
        }else{setMain(true)}
        setToggle1(false);
        setToggle2(false)
        setToggle3(false)}

    //Fun CHatgpt
    const sendDataToDjango = (value) => {
      // Use the Fetch API to send a POST request to the Django backend
      fetch(`${baseUrl}/send_data_to_arduino/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',  // Use form-urlencoded for sending data
          'X-CSRFToken': getCookie('csrftoken'),  // Include CSRF token for Django
        },
        body:`data=${value}`,  // Send the button value as form data
      })
        .then((response) => response.text())  // Convert the response to text
        .then((data) => {
          console.log(data);  // Log the response data to the console
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    };
  
    // Function to get the CSRF token from cookies
    const getCookie = (name) => {
      let cookieValue = null;
      if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
          const cookie = cookies[i].trim();
          if (cookie.substring(0, name.length + 1) === name + '=') {
            cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
            break;
          }
        }
      }
      return cookieValue;

    }
  return (
    <div id='plan-main-container' className='h-full w-full flex flex-col'>
      <div id='row-1' className=' flex  w-full justify-around relative top-[18rem]'>
        <div id='button-1' className='dropdown dropdown-left'>
            <button tabIndex={0} role="button"><svg xmlns="http://www.w3.org/2000/svg" width="3rem" height="3rem" viewBox="0 0 48 48"><circle cx="24" cy="24" r="21" fill="#2196f3"/><path fill="#fff" d="M22 22h4v11h-4z"/><circle cx="24" cy="16.5" r="2.5" fill="#fff"/></svg></button>
            <div
              tabIndex={0}
              className="dropdown-content bg-slate-700 h-[300px] rounded-lg w-64 p-2 text-white">
              <div className="card-body flex flex-col items-center w-full m-0 p-0">
                <h1 className="text-2xl font-bold">Room 1</h1>
                <hr />
                <h2>RMS Power: 23 Watts</h2>
                <h2>Units: 3KW/hr</h2>
                <input type="checkbox" checked={toggle1} onChange={() => sendDataToDjango(1)} className="toggle toggle-success toggle-lg" defaultChecked />
              </div>
            </div>
        </div>

        <div id='button-2' className='dropdown dropdown-right'>
            <button tabIndex={1}><svg xmlns="http://www.w3.org/2000/svg" width="3rem" height="3rem" viewBox="0 0 48 48"><circle cx="24" cy="24" r="21" fill="#2196f3"/><path fill="#fff" d="M22 22h4v11h-4z"/><circle cx="24" cy="16.5" r="2.5" fill="#fff"/></svg></button>
            <div
              tabIndex={1}
              className="dropdown-content bg-slate-700 h-[300px] rounded-lg w-64 p-2 text-white">
              <div className="card-body flex flex-col items-center w-full m-0 p-0">
                <h1 className="text-2xl font-bold">Room 2</h1>
                <hr />
                <h2>RMS Power: 23 Watts</h2>
                <h2>Units: 3KW/hr</h2>
                <input type="checkbox" checked={toggle2} onChange={() => sendDataToDjango(2)} className="toggle toggle-success toggle-lg" defaultChecked />
              </div>
            </div>
        </div>
      </div>
      <div id='row-2'className='flex relative justify-center right-[18rem] top-[35rem]'>
        <div id='button-3' className='dropdown dropdown-left dropdown-end'>
            <button tabIndex={2}><svg xmlns="http://www.w3.org/2000/svg" width="3rem" height="3rem" viewBox="0 0 48 48"><circle cx="24" cy="24" r="21" fill="#2196f3"/><path fill="#fff" d="M22 22h4v11h-4z"/><circle cx="24" cy="16.5" r="2.5" fill="#fff"/></svg></button>
            <div
              tabIndex={2}
              className="dropdown-content bg-slate-700 h-[300px] rounded-lg w-64 p-2 text-white">
              <div className="card-body flex flex-col items-center w-full m-0 p-0">
                <h1 className="text-2xl font-bold">Room 3</h1>
                <hr />
                <h2>RMS Power: 23 Watts</h2>
                <h2>Units: 3KW/hr</h2>
                <input type="checkbox" checked={toggle3} onChange={() => sendDataToDjango(3)} className="toggle toggle-success toggle-lg" defaultChecked />
              </div>
            </div>
        </div>
      </div>
      <div id='row-3' className='flex items-end justify-end w-full '>
        <button onClick={() => sendDataToDjango(5)}>
            <img className={!main?"grayscale":"grayscale-0"} src={logo} width={80} alt="" />
        </button>
        
      </div>
    </div>

  )
}

export default ZonalMapping
