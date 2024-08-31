import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './myMap.css';

const MyMap = () => {

  const customIcon = new L.Icon({
    iconUrl: 'data:image/svg+xml;base64,' + btoa(`
      <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" viewBox="0 0 1200 1200">
        <path fill="#ff0000" d="M600 0C350.178 0 147.656 202.521 147.656 452.344c0 83.547 16.353 169.837 63.281 232.031L600 1200l389.062-515.625c42.625-56.49 63.281-156.356 63.281-232.031C1052.344 202.521 849.822 0 600 0m0 261.987c105.116 0 190.356 85.241 190.356 190.356C790.356 557.46 705.116 642.7 600 642.7s-190.356-85.24-190.356-190.356S494.884 261.987 600 261.987"/>
      </svg>`),
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
  });

  const LocationMarker = () => {
    const [position, setPosition] = useState(null);
    const [message, setMessage] = useState('Click on the map to set your location');
  
    const map = useMapEvents({
      mousemove() {
        if (!position) {
          setMessage('Locating...');
          map.locate();
        }
      },
      click(e) {
        setPosition(e.latlng);
        setMessage('You are here');
        map.flyTo(e.latlng, map.getZoom());
        console.log('Location selected:', e.latlng); // Log the selected location
      },
      locationfound(e) {
        setPosition(e.latlng);
        map.flyTo(e.latlng, map.getZoom());
        setMessage('You are here');
        console.log('Location found:', e.latlng); // Log the found location
      },
      locationerror() {
        setMessage('Location access denied');
      }
    });
  
    return (
      <>
        <p>{message}</p>
        {position && (
          <Marker position={position} icon={customIcon}>
            <Popup>{message}</Popup>
          </Marker>
        )}
      </>
    );
  };
  

  return (
    <div>
      <MapContainer
        center={{ lat: 9.981636, lng: 76.299881 }}
        zoom={15}
        scrollWheelZoom={true}
        style={{ height: "70vh", width: "100%", borderRadius: "30px" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LocationMarker />
      </MapContainer>
        <div className='flex w-full'>
        <div id='complaint' className='flex flex-col m-5 w-full'>
          <textarea className="textarea textarea-bordered w-full text-2xl" rows={5} placeholder="Write your complaint"></textarea>
        </div>
      
        <button className='self-center m-5 p-3 text-black bg-blue-500 rounded'>REPORT</button>
      </div>
    </div>
  );
};

export default MyMap;
