import React, { Component } from 'react';
import Input from '@material-ui/core/Input';
import LeafletMap from './LeafletMap'
import {
    TextField,
    Button,
    Container
} from '@material-ui/core'

class AddListing extends Component {
    state = {
    }

    handleTextChange = (e) => {
        const state = { ...this.state }
        state[e.target.name] = e.target.value
        this.setState(state)
    }

    addListing = (e) => {
        e.preventDefault()
        console.log('Listing sending to addListing ', this.state);
        this.props.addListing(this.state)
        this.props.history.push("/")
    }

    render() {
        return (
            <div className="add-listing">
                <form className="add-listing-form" onSubmit={this.addListing}>
                    <TextField className="add-listing-input" onChange={this.handleTextChange} value={this.state.name} placeholder="Name" name="name" id="name" />
                    <TextField className="add-listing-input" onChange={this.handleTextChange} value={this.state.address} placeholder="Address" name="address" id="address" />
                    <TextField className="add-listing-input" onChange={this.handleTextChange} value={this.state.hours} placeholder="Hours (e.g. 8AM - 9PM)" name="hours" id="hours" />
                    <TextField className="add-listing-input" onChange={this.handleTextChange} value={this.state.description} placeholder="Description" name="description" id="description" />
                    <Button type="submit" className="add-listing-button">Add Listing</Button>
                </form>
                <div className="leaflet-map-container">
                    <LeafletMap className="leaflet-map" />
                </div>
            </div>
        )
    }
}

export default AddListing