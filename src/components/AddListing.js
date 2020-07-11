import React, { Component } from 'react';
import Input from '@material-ui/core/Input';
// import Map from './Map'
import {
    TextField,
    Button,
    Container
} from '@material-ui/core'

class AddListing extends Component {
    state = {
        listing: {name: null, address: null, hours: null, description: null}
    }

    handleTextChange = (e) => {
        const state = { ...this.state }
        state[e.target.name] = e.target.value
        this.setState(state)
    }

    addListing = (e) => {
        e.preventDefault()
        this.props.addListing(this.state)
        this.props.history.push("/")
    }

    render() {
        return (
            <div className="add-listing">
                <form className="add-listing-form" onSubmit={this.addListing}>
                    <TextField className="add-listing-input" onChange={this.handleTextChange} value={this.state.listing.name} placeholder="Name" name="business-name" id="business-name" />
                    <TextField className="add-listing-input" onChange={this.handleTextChange} value={this.state.listing.address} placeholder="Address" name="business-address" id="business-address" />
                    <TextField className="add-listing-input" onChange={this.handleTextChange} value={this.state.listing.hours} placeholder="Hours (e.g. 8AM - 9PM)" name="business-hours" id="business-hours" />
                    <TextField className="add-listing-input" onChange={this.handleTextChange} value={this.state.listing.description} placeholder="Description" name="business-description" id="business-description" />
                    <Button type="submit" className="add-listing-button">Add Listing</Button>
                </form>
            </div>
        )
    }
}

export default AddListing