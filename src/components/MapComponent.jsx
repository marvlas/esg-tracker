import React from 'react';
import { MapContainer, TileLayer, Marker, Popup  } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';

const MapComponent = () => {
  const locations = [
    { id: 1, position: [51.505, -0.09], title: 'Location 1' },
    { id: 2, position: [51.51, -0.1], title: 'Location 2' }, 
    { id: 3, position: [51.495, -0.1], title: 'Location 3' },
    // Add more locations as needed
  ];

  return (
    <div className="container">
      <MapContainer center={locations[0].position} zoom={13} style={{ height: '500px', width: '100%' }}>
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://carto.com/attributions">CartoDB</a> contributors'
        />
        {locations.map((location) => (
          <Marker key={location.id} position={location.position}>
            <Popup>{location.title}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapComponent;
