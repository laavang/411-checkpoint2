import React from 'react';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';

const addListing = () => {
    return (

            <div className="listing">
                <div className="add-listing-form">
                    <div><Input className="add-listing-input" placeholder="Name" name="business-name" id="business-name"></Input></div>
                    <div><Input className="add-listing-input" placeholder="Address" name="business-address" id="business-address"></Input></div>
                    <div><Input className="add-listing-input" placeholder="Hours (e.g. 8AM - 9PM)" name="business-hours" id="business-hours"></Input></div>
                    <div><Input className="add-listing-input" placeholder="Description" name="business-description" id="business-description"></Input></div>
                    <div><Button className="add-listing-button">Save</Button></div>
                </div>
                <div className="map">
                </div>
            </div>
    )
}

export default addListing