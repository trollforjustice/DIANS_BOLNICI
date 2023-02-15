import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, Tooltip } from "react-leaflet";
import L, { Draggable } from "leaflet";
import "./App.css";
import { Icon } from "leaflet";
import hospitals from "./data.json";
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
   

      //hospitals markers
      var POIobjects=[]

      var names=[]
      var streets=[]
      var distances=[]

      var hospitalMarkers = hospitals.features.map((objekt) => {
        var lat = objekt.geometry.coordinates[1];
        var lng = objekt.geometry.coordinates[0];
      
        var distance = getDistance(locationMarker.getLatLng(), [lat,lng])
       

      if(lng){
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
    <div className="Basicmap">
      {lng && <button class="button-5" role="button" onClick={()=>showMyLocation2()}>Покажи локација</button>}
      {!lng && <button class="button-5" role="button" onClick={()=>showMyLocation2()}>Locate Me</button>}

      <div id="map"></div>
    </div>
  );
};


export default Basicmap;