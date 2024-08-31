import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './myMap.css'

const MyMap = () => {
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
        setPosition(e.latlng);  // Correctly set the position using event latlng
        setMessage('You are here');
        <svg className='location' xmlns="http://www.w3.org/2000/svg" width="5em" height="1em" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" d="M10.832 2.688A4.06 4.06 0 0 0 8.02 1.5h-.04a4.056 4.056 0 0 0-4 4c-.013.75.198 1.487.606 2.117L7.734 14h.533l3.147-6.383c.409-.63.62-1.367.606-2.117a4.06 4.06 0 0 0-1.188-2.812M7.925 2.5l.082.01l.074-.01a3.075 3.075 0 0 1 2.941 3.037a2.74 2.74 0 0 1-.467 1.568l-.02.034l-.017.035L8 12.279l-2.517-5.1l-.017-.039l-.02-.034a2.74 2.74 0 0 1-.467-1.568A3.074 3.074 0 0 1 7.924 2.5zm.612 2.169a1 1 0 1 0-1.112 1.663a1 1 0 0 0 1.112-1.663M6.87 3.837a2 2 0 1 1 2.22 3.326a2 2 0 0 1-2.22-3.326" clip-rule="evenodd"/></svg>
        map.flyTo(e.latlng, map.getZoom());
      },
      locationfound(e) {
        setPosition(e.latlng);
        map.flyTo(e.latlng, map.getZoom());
        setMessage('You are here');
        <svg className='location' xmlns="http://www.w3.org/2000/svg" width="5em" height="1em" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" d="M10.832 2.688A4.06 4.06 0 0 0 8.02 1.5h-.04a4.056 4.056 0 0 0-4 4c-.013.75.198 1.487.606 2.117L7.734 14h.533l3.147-6.383c.409-.63.62-1.367.606-2.117a4.06 4.06 0 0 0-1.188-2.812M7.925 2.5l.082.01l.074-.01a3.075 3.075 0 0 1 2.941 3.037a2.74 2.74 0 0 1-.467 1.568l-.02.034l-.017.035L8 12.279l-2.517-5.1l-.017-.039l-.02-.034a2.74 2.74 0 0 1-.467-1.568A3.074 3.074 0 0 1 7.924 2.5zm.612 2.169a1 1 0 1 0-1.112 1.663a1 1 0 0 0 1.112-1.663M6.87 3.837a2 2 0 1 1 2.22 3.326a2 2 0 0 1-2.22-3.326" clip-rule="evenodd"/></svg>

      },
      locationerror() {
        setMessage('Location access denied');
      }
    });

    return (
      <>
        <p>{message}</p>
        {position && (
          <Marker position={position}>
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
        style={{ height: "70vh", width: "100%"  , borderRadius:"30px"}}
        >
        <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LocationMarker />
        </MapContainer>
        <div className='flex flex-col'>
            <button className='self-center m-5 p-3 text-black bg-blue-500 rounded'>REPORT   </button>
            
        </div>
    </div>
    

  );
};

export default MyMap;
