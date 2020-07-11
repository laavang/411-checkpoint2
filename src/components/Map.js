import React from 'react'
import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';

class Map extends React.Component {
    render() {
        // const position = [this.state.lat, this.state.lng]
        const position = [51.505, 0.09]
        return (
        //   <Map center={position} zoom={this.state.zoom}>
          <Map center={position} zoom="13">
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
}

export default Map