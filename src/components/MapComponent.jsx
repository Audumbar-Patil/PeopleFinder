import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import './MapComponent.css';


import iconRetinaUrl from 'leaflet/dist/images/marker-icon-2x.png';

import iconUrl from 'leaflet/dist/images/marker-icon.png';
import shadowUrl from 'leaflet/dist/images/marker-shadow.png';


delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: iconRetinaUrl,
  iconUrl: iconUrl,
  shadowUrl: shadowUrl,
});



function ChangeView({ center, zoom }) {
  const map = useMap();
  useEffect(() => {
    if (center) {
      map.setView(center, zoom);
    
    }
  }, [center, zoom, map]);
  return null;
}

function MapComponent({ center, markerCoords, markerPopupContent }) {
  const defaultZoom = 13;
  const mapHeight = "500px"; 

  console.log("MapComponent rendering. Center:", center, "Marker:", markerCoords);

  return (
    <div className="map-component" style={{ height: mapHeight }}>
      <MapContainer
        center={center || [0, 0]} 
        zoom={defaultZoom}
        scrollWheelZoom={true}
        style={{ height: "100%", width: "100%" }}
      >
        <ChangeView center={center} zoom={defaultZoom} />

        <TileLayer
          attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {markerCoords && (
          <Marker position={markerCoords}>
            <Popup>
              {markerPopupContent || "Selected Location"}
            </Popup>
          </Marker>
        )}
      </MapContainer>
      {!markerCoords && <p className="map-placeholder">Select 'Show on Map' on a profile to see the location.</p>}
    </div>
  );
}

export default MapComponent;
