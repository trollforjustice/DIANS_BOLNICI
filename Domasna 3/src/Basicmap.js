import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, Tooltip } from "react-leaflet";
import L, { Draggable } from "leaflet";
import "./App.css";
import { Icon } from "leaflet";
import hospitals from "./hospitals.json";
import useGeoLocation from "./useGeoLocation";
import { useRef } from "react";
import POI from './POI';
import i18next from 'i18next';

const markerIcon = new L.icon({
  iconUrl: require("./resources/here.png"),
  iconSize: [40, 45],
});

const hospitalIcon = new L.icon({
  iconUrl: require("./resources/hospitalicon.png"),
  iconSize: [35, 40],
});
var markers2
var names2;
var streets2;
var distances2;
const Basicmap = ({lng,changeLanguage}) => {
  const ZOOM = 9;
  const mapRef = useRef();

  const location = useGeoLocation();

  var coordinates = [location.coordinates.lat, location.coordinates.lng];

 
 
var map;
  const createMap = () =>{
    var container = L.DomUtil.get("map");
    console.log(container);
    if (container != null) {
      container._leaflet_id = null;
    }

    console.log('====================================');
    console.log("aa");
    console.log('====================================');
    //initate map
    var markers = [];
    var names=[]
    var streets=[]
    var distances=[]
    if (location.loaded) {
     // let map = mapRef.current;
       map = L.map("map").setView(coordinates, 13);
      L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution:
          '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }).addTo(map);
      //location marker

      console.log(document.getElementById("map").childElementCount)

    

      if(!lng){
        var locationMarker = L.marker(coordinates, {icon:markerIcon})
          .addTo(map)
          .bindPopup("You are here")
          .openPopup();
          markers.push(locationMarker)
      }else{
        var locationMarker = L.marker(coordinates, {icon:markerIcon})
          .addTo(map)
          .bindPopup("Вие сте тука")
          .openPopup();
          markers.push(locationMarker)
      }
   

      var locationPOI = new POI(locationMarker);
  
      

      //hospitals markers
      var POIobjects=[]

      var names=[]
      var streets=[]
      var distances=[]

      var hospitalMarkers = hospitals.features.map((objekt) => {
        var lat = objekt.geometry.coordinates[1];
        var lng = objekt.geometry.coordinates[0];
      
        var distance = getDistance(locationMarker.getLatLng(), [lat,lng])
       

      if(!lng){
        markers.push(L.marker([lat, lng],{icon:hospitalIcon}).addTo(map)
        .bindPopup(`<h3>${objekt.properties.name}</h3>
          <p>Адреса: ${objekt.properties["addr:street"]}</p>
          <p>Оддалеченост: ${distance} km</p>
          `));
          names.push(objekt.properties.name)
         streets.push(objekt.properties["addr:street"])
         distances.push(distance)
          
      }else{
        markers.push(L.marker([lat, lng],{icon:hospitalIcon}).addTo(map)
        .bindPopup(`<h3>${objekt.properties.name}</h3>
          <p>Address: ${objekt.properties["addr:street"]}</p>
          <p>Distance: ${distance} km</p>
          `));
          POIobjects.push({name:objekt.properties.name})
          names.push(objekt.properties.name)
       streets.push(objekt.properties["addr:street"])
       distances.push(distance)
      }
      });
      markers2=markers
      names2=names;
      streets2=streets;
      distances2=distances;
      console.log(markers2)

    }
  }
 
  useEffect(() => {
    //without this map dies lol, no idea what it does
    //if it works, don't touch it

    
    createMap();
  },[location.loaded]);
 useEffect(() => {
   console.log(markers2);
   if (markers2 && markers2.length) {
     if (lng) {
       markers2[0]._popup._content = "Вие сте тука";
       for (let i = 1; i < markers2.length; i++) {
        markers2[i]._popup._content = `
               <h3>${names2[i - 1]}</h3>\n
               <p>Адреса: ${streets2[i - 1]}</p>\n
               <p>Одалеченост: ${distances2[i - 1]} km</p>\n          `;
      }
     } else {
       markers2[0]._popup._content = "You are here";
       for (let i = 1; i < markers2.length; i++) {
         markers2[i]._popup._content = `
                <h3>${names2[i - 1]}</h3>\n
                <p>Address: ${streets2[i - 1]}</p>\n
                <p>Distance: ${distances2[i - 1]} km</p>\n          `;
                
       }
     }
     markers2[0]._popup._closeButton.click();
     markers2[0]._popup._source._icon.click();
     
   }
 }, [lng]);

 const showMyLocation2 = () => {
  map.flyTo(coordinates, 15, {easeLinearity: 0.15})
};

 const getNearest = (hospitals, distances) =>{
  var min=0;
  for(let i=0;i<distances.length;i++){
    min=Math.min(...distances)
    
  }
 }

function getDistance(origin, destination) {
    // return distance in meters
    var lon1 = toRadian(origin[Object.keys(origin)[1]]),
        lat1 = toRadian(origin[Object.keys(origin)[0]]),
        lon2 = toRadian(destination[1]),
        lat2 = toRadian(destination[0]);
    
  //console.log(lon1,lat1,lon2,lat2);

    var deltaLat = lat2 - lat1;
    var deltaLon = lon2 - lon1;

    var a = Math.pow(Math.sin(deltaLat/2), 2) + Math.cos(lat1) * Math.cos(lat2) * Math.pow(Math.sin(deltaLon/2), 2);
    var c = 2 * Math.asin(Math.sqrt(a));
    var EARTH_RADIUS = 6371;
    return (c * EARTH_RADIUS).toFixed(2);
}
function toRadian(degree) {
    return degree*Math.PI/180;
}

  

  return (
    // <div className="map">
    //   <MapContainer
    //     center={[41.99646, 21.43141]}
    //     zoom={13}
    //     scrollWheelZoom={true}
    //   >
    //     <TileLayer
    //       attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    //       url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    //     />

    //     {location.loaded && !location.error && (
    //       <Marker
    //         position={[location.coordinates.lat, location.coordinates.lng]}
    //         icon={markerIcon}
    //       >
    //         <Popup
    //           className="popup"
    //           position={[location.coordinates.lat, location.coordinates.lng]}
    //         >
    //           You are here
    //         </Popup>
    //         <Tooltip
    //           id="tooltip"
    //           permanent
    //           position={[location.coordinates.lat, location.coordinates.lng]}
    //         >
    //           <span>You are here</span>
    //         </Tooltip>
    //       </Marker>
    //     )}

    //     {/* {console.log(hospitals,location)} */}

    //     {hospitals.features.map((objekt) => {
    //       let lat = objekt.geometry.coordinates[1];
    //       let lng = objekt.geometry.coordinates[0];

    //       if( location.loaded && !location.error && showComponent)
    //       return (

    //         <Marker key={objekt.id} position={[lat, lng]} icon={hospitalIcon} >
    //           <Popup position={[lat, lng]}>
    //             <div className="popup">
    //               <h4>{"Болница: " + objekt.properties.name}</h4>
    //               <p>{"Адреса: " + objekt.properties["addr:street"]}</p>
    //               {/* <p>{"Distance: " + getDistance(location.coordinates, objekt.geometry.coordinates)}</p> */}
    //               {/* <p>{objekt.geometry.coordinates}</p> */}
    //             </div>
    //           </Popup>
    //         </Marker>
    //       );
    //     })}
    //     {console.log("test")}
    //   </MapContainer>
    //   <div>
    //     <button onClick={showMyLocation}>Locate me</button>
    //   </div>
    // </div>

    <div className="Basicmap">
      {lng && <button class="button-5" role="button" onClick={()=>showMyLocation2()}>Покажи локација</button>}
      {!lng && <button class="button-5" role="button" onClick={()=>showMyLocation2()}>Locate Me</button>}

      <div id="map"></div>
    </div>
  );
};


export default Basicmap;
