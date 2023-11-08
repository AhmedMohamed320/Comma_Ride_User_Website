"use client";
import L from "leaflet";
import MarkerIcon from "../../node_modules/leaflet/dist/images/marker-icon.png";
import MarkerShadow from "../../node_modules/leaflet/dist/images/marker-shadow.png";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const Map = () => {
    const locations = [
        {
            position: [30.586466, 31.491874],
            content: "مندوبك . تم التحديث الساعه 01:00",
        },
        { position: [30.587749, 31.486327], content: "مكتبه عمر" },
        { position: [30.594408, 31.49579], content: "نقطه الوصول" },
    ];

    const popupStyle = {
        fontSize: "1.4rem",
    };

    return (
        <div>
            <MapContainer
                style={{
                    height: "50vh",
                    width: "100%",
                }}
                zoom={15}
                center={[30.586466, 31.491874]}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {locations.map((location, index) => (
                    <Marker
                        key={index}
                        icon={
                            new L.Icon({
                                iconUrl: MarkerIcon.src,
                                iconRetinaUrl: MarkerIcon.src,
                                iconSize: [25, 41],
                                iconAnchor: [12.5, 41],
                                popupAnchor: [0, -41],
                                shadowUrl: MarkerShadow.src,
                                shadowSize: [41, 41],
                            })
                        }
                        position={location.position}
                    >
                        <Popup>
                            <div style={popupStyle}>{location.content}</div>
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </div>
    );
};

export default Map;
