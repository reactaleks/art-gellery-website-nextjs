"use client";
import { MapContainer, Marker, Popup, TileLayer, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import L from "leaflet"


const svgIcon = L.divIcon({
  html: `<svg width="66" height="88" viewBox="0 0 66 88" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M66 0H0V56H21L33 88L45 56H66V0Z" fill="#151515"/>
  <circle cx="33" cy="28" r="12" fill="#D5966C"/>
  </svg>`,
  className: "svg-icon",
  iconSize: [24, 40],
  iconAnchor: [35, 80]
  
})

export default function MapComponent() {
  return (
    <MapContainer
      center={[41.4813163, -71.3103603]}
      zoom={18}
      scrollWheelZoom={true}
      zoomControl={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[41.4813163, -71.3103603]} icon={svgIcon}>
        
      </Marker>
    </MapContainer>
  );
}
