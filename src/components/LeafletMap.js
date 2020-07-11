import React, { Component } from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
// import 'node_modules/leaflet-geosearch/dist/geosearch.css';


const LeafletMap = (props) => {

    console.log(props.map)
    const zoom = props.map.zoom
    const position = [props.map.lat, props.map.lng]

    return (
      <Map center={position} zoom={zoom}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </Map>
    )
}

export default LeafletMap