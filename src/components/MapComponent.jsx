import "../components/MapComponent.css"
import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const MapComponent = (props) => {
  const [locations, setLocations] = useState([]);

  const findLocations = () => {
    if (props.companies != []) {
      const addedLocations = props.companies.map((elm) => ({
        id: elm.id,
        position: [elm.location.latitude, elm.location.longitude],
        title: elm.name
      }));
      setLocations(addedLocations);
    }
  };

  useEffect(() => {
    findLocations();
  }, [props.companies]);


  return (
    <div id="MapComponent" className="container">
      {locations.length !== 0 ? (
        <MapContainer center={locations[7].position} zoom={3} style={{ height: '500px', width: '100%' }}>
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
      ) : (
        <p>Map loading...</p>
      )}
    </div>
  );
  
};

export default MapComponent;
