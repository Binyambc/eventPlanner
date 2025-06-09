import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./EventDetail.module.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";


const EventDetail = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);

  delete L.Icon.Default.prototype._getIconUrl;
  L.Icon.Default.mergeOptions({
  iconRetinaUrl: "/images/marker-icon-2x.png",
  iconUrl: "/images/marker-icon.png",
  shadowUrl: "/images/marker-shadow.png",
  });

  useEffect(() => {
    axios
      .get(`http://localhost:3006/events/${id}`)
      .then((res) => setEvent(res.data))
      .catch((err) => console.error("Failed to fetch event detail", err));
  }, [id]);

  if (!event) return <p>Loading...</p>;

  return (
    <div className={styles.detailWrapper}>
      <h1>{event.title}</h1>
      <p><strong>Category:</strong> {event.category}</p>
      <p><strong>Location:</strong> {event.location}</p>
      <p><strong>Start:</strong> {new Date(event.start).toLocaleString()}</p>
      <p><strong>End:</strong> {new Date(event.end).toLocaleString()}</p>
      <p>{event.description}</p>

      {event.latitude && event.longitude && (
        <div className={styles.mapWrapper}>
            <MapContainer
            center={[event.latitude, event.longitude]}
            zoom={13}
            scrollWheelZoom={false}
            style={{ height: "300px", width: "100%" }}
            >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={[event.latitude, event.longitude]}>
                <Popup>{event.title}</Popup>
            </Marker>
            </MapContainer>
        </div>
        )}

        {event.image && <img
            src={event.image ? event.image : "/images/placeholder.png"}
            alt={event.title}
            className={styles.image}
        />}
    </div>
  );
};

export default EventDetail;
