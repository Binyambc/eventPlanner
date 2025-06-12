import styles from "./MapAll.module.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { time } from "../../data/reusable";
import L from "leaflet";
import markerIcon from "../../../public/markerIcon.png";
import markerShadow from "../../../public/markerShadow.png";

const MapAll = ({ eventData }) => {
  const customIcon = L.icon({
    iconUrl: markerIcon,
    shadowUrl: markerShadow,
    iconSize: [30, 30],
    shadowSize: [30, 30],
    iconAnchor: [15, 30],
    shadowAnchor: [10, 30],
    popupAnchor: [0, -30],
  });
  if (!eventData || eventData.length === 0) {
    return <p className={styles.loading}>Loading map.....</p>;
  }
  const geo = [eventData[0].lat, eventData[0].lng];
  return (
    <>
    <div className={styles.mapWrapper} >
    <MapContainer center={geo} zoom={13} className={styles.mapView}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {eventData.map((event) => (
        <Marker
          position={[event.lat, event.lng]}
          key={event.id}
          icon={customIcon}
        >
          <Popup>
            <h3>{event.title}</h3>
            <p>📍 {event.location}</p>
            <p> {time(event.start, event.end)}</p>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
    </div>
    </>
  );
};

export default MapAll;
