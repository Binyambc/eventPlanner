import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import styles from "./EventMap.modules.css";

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

const EventMap = ({ events }) => {
    return (
        <div className={styles.mapContainer}>
            <MapContainer
                center={events.length > 0 ? [events[0].latitude, events[0].longitude] : [20, 0]}
                zoom={events.length > 0 ? 5 : 2}
                scrollWheelZoom={false}
                style={{ height: '100%px', width: '100%' }}
            >
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                {events.map((event) =>
                event.latitude && event.longitude ? (
                    <Marker key={event.id} position={[event.latitude, event.longitude]}>
                    <Popup>
                        <strong>{event.title}</strong>
                        <br />
                        {event.location}
                    </Popup>
                    </Marker>
                ) : null
                )}
            </MapContainer>
        </div>
    );
};

export default EventMap;