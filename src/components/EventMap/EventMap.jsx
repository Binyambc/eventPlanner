import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

const EventMap = ({ events }) => {
    return (
        <MapContainer
        center={events.length > 0 ? [events[0].latitude, events[0].longitude] : [0, 0]}
        zoom={2}
        style={{ height: '500px', width: '100%'}}
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {events.map((event) => 
                event.latitude && event.longitude ? (
                <Marker
                key={event.id}
                position={[event.latitude, event.longitude]}
                >
                    <Popup>
                        <strong>{event.title}</strong><br />
                        {event.location}
                    </Popup>
                </Marker>
            ) : null
            )}
        </MapContainer>
    );
};

export default EventMap;