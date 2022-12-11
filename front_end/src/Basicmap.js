import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, Tooltip } from "react-leaflet";
import L from "leaflet";
import "./App.css";
import { Icon } from "leaflet";
import hospitals from "./hospitals.json";
import useGeoLocation from "./useGeoLocation";
import { useRef } from "react";

const markerIcon = new L.icon({
  iconUrl: require("./resources/here.png"),
  iconSize: [40, 45],
});

const hospitalIcon = new L.icon({
  iconUrl: require("./resources/hospitalicon.png"),
  iconSize: [35, 40],
});

const Basicmap = () => {
  const ZOOM = 9;
  const location = useGeoLocation();
  const mapRef = useRef();
  const [popup, setpopup] = useState(true);
  const [showComponent, setShowComponent] = useState(false);
  //const [hospitals, setHospitals] = useState(hospitalsData);
  useEffect(() => {
    setInterval(() => {
      setShowComponent(true);
    }, 2200);
  }, []);

  const showMyLocation = () => {
    if (location.loaded && !location.error) {
      mapRef.current.leafletElement.flyTo(
        [location.coordinates.lat, location.coordinates.lng, location],
        ZOOM,
        { animate: true }
      );
    } else {
      alert(location.error.message);
    }
  };

  function toRadian(degree) {
    return degree*Math.PI/180;
}
  function getDistance(origin, destination) {
    // return distance in meters
    var lon1 = toRadian(origin[1]),
        lat1 = toRadian(origin[0]),
        lon2 = toRadian(destination[1]),
        lat2 = toRadian(destination[0]);
        

    var deltaLat = lat2 - lat1;
    var deltaLon = lon2 - lon1;

    var a = Math.pow(Math.sin(deltaLat/2), 2) + Math.cos(lat1) * Math.cos(lat2) * Math.pow(Math.sin(deltaLon/2), 2);
    var c = 2 * Math.asin(Math.sqrt(a));
    var EARTH_RADIUS = 6371;
    return c * EARTH_RADIUS * 1000;
}

  return (
    <div className="map">
      <MapContainer
        center={[41.99646, 21.43141]}
        zoom={13}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {location.loaded && !location.error && (
          <Marker
            position={[location.coordinates.lat, location.coordinates.lng]}
            icon={markerIcon}
          >
            <Popup
              className="popup"
              position={[location.coordinates.lat, location.coordinates.lng]}
            >
              You are here
            </Popup>
            <Tooltip
              id="tooltip"
              permanent
              position={[location.coordinates.lat, location.coordinates.lng]}
            >
              <span>You are here</span>
            </Tooltip>
          </Marker>
        )}

        {/* {console.log(hospitals,location)} */}

        {hospitals.features.map((objekt) => {
          let lat = objekt.geometry.coordinates[1];
          let lng = objekt.geometry.coordinates[0];

          if( location.loaded && !location.error && showComponent)
          return (
           
            <Marker key={objekt.id} position={[lat, lng]} icon={hospitalIcon} >
              <Popup position={[lat, lng]}>
                <div className="popup">
                  <h4>{"Болница: " + objekt.properties.name}</h4>
                  <p>{"Адреса: " + objekt.properties["addr:street"]}</p>
                  {/* <p>{"Distance: " + getDistance(location.coordinates, objekt.geometry.coordinates)}</p> */}
                  {/* <p>{objekt.geometry.coordinates}</p> */}
                </div>
              </Popup>
            </Marker>
          );
        })}
        {console.log("test")}
      </MapContainer>
      <div>
        <button onClick={showMyLocation}>Locate me</button>
      </div>
    </div>
  );
};

export default Basicmap;
