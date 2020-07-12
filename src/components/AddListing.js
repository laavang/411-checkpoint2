import React, { Component } from 'react';
// import Input from '@material-ui/core/Input';
import LeafletMap from './LeafletMap'
import {
    TextField,
    Button,
    Container
} from '@material-ui/core'

class AddListing extends Component {
    state = {
        address: "",
        lat: 30.2725164,
        lng: -97.743237
    }

    handleTextChange = (e) => {
        const state = { ...this.state };
        state[e.target.name] = e.target.value;
        this.setState(state);
        if (this.state.address !== "") { this.getCoordinates() };
    }

    addListing = (e) => {
        e.preventDefault()
        console.log('Listing sending to addListing ', this.state);
        this.props.addListing(this.state);
        this.props.history.push("/");
    }

    getCoordinates = () => {
        let address = this.state.address.replace(/\s/g, '+');
        const key = process.env.REACT_APP_GOOGLE_MAPS;
        fetch(`https://maps.google.com/maps/api/geocode/json?key=${key}&address=${address}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.results && data.status === "OK") {
                    this.setState({
                        lat: data.results[0].geometry.location.lat,
                        lng: data.results[0].geometry.location.lng
                    });
                }
            })
    }

    render() {
        return (
            <div className="add-listing" >
                <form className="add-listing-form" onSubmit={this.addListing}>
                    <TextField className="add-listing-input" onChange={this.handleTextChange} value={this.state.name} placeholder="Name" name="name" id="name" />
                    <TextField className="add-listing-input" onChange={this.handleTextChange} value={this.state.address} placeholder="Address (Street, City, State)" name="address" id="address" />
                    <TextField className="add-listing-input" onChange={this.handleTextChange} value={this.state.hours} placeholder="Hours (e.g. 8AM - 9PM)" name="hours" id="hours" />
                    <TextField className="add-listing-input" onChange={this.handleTextChange} value={this.state.description} placeholder="Description" name="description" id="description" />
                    <Button type="submit" className="add-listing-button">Add Listing</Button>
                </form>
                <div className="leaflet-map-container">
                    <LeafletMap className="leaflet-map" lat={this.state.lat} lng={this.state.lng} />
                </div>
            </div>
        )
    }
}

export default AddListing