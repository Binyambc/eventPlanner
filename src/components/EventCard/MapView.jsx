import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import styles from "./EventCard.module.css";
import L from "leaflet";
import markerIcon from "../../../public/markerIcon.png";
import markerShadow from "../../../public/markerShadow.png";

const MapView = ({ geo, title, location }) => {
  const customIcon = L.icon({
    iconUrl: markerIcon,
    shadowUrl: markerShadow,
    iconSize: [30, 30],
    shadowSize: [30, 30],
    iconAnchor: [15, 30],
    shadowAnchor: [10, 30],
    popupAnchor: [0, -30],
  });
  return (
    <MapContainer center={geo} zoom={13} className={styles.mapView}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={geo} icon={customIcon}>
        <Popup>
          <h3>{title}</h3>
          <p>{location}</p>
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapView;
