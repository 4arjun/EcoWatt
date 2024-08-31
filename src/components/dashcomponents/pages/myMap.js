import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const MyMap = () => {
  const LocationMarker = () => {
    const [position, setPosition] = useState(null);
    const [message, setMessage] = useState('Click on the map to find your location');

    const map = useMapEvents({
        
            mousemove() {
                setMessage('Locating...');
                map.locate();

        
      
      },
      locationfound(e) {
        setPosition(e.latlng);
        map.flyTo(e.latlng, map.getZoom());
        setMessage('You are here');
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
    <MapContainer
      center={{ lat: 51.505, lng: -0.09 }}
      zoom={15}
      scrollWheelZoom={true}
      style={{ height: "80vh", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <LocationMarker />
    </MapContainer>
  );
};

export default MyMap;
