import React, { useState, useEffect } from 'react';
import { render } from '@testing-library/react';
import LeafletMap from '../containers/LeafletMap'
import { Link } from 'react-router-dom'


const ListingDetails = (props) => {
    const [listing, setListing] = useState(null);
    console.log('listing', listing)

    useEffect(() => {
        // load data
        let params = new URLSearchParams(document.location.search.substring(1));
        console.log('params', params)
        let index = parseInt(params.get("id")) - 1;
        console.log('id', index)
        console.log('props', props)
        console.log('props.listings', props.listings)
        // const listing = props.listings.find(listing => {
        //     console.log(`${listing.id} === ${id}?: ${listing.id === id}`)
        //     return listing.id === id
        // });
        const listing = props.listings[index];
        console.log('found listing?', listing)
        setListing(listing);
    }, []);

    if (!listing) {
        console.log('no listing')
        return <div></div>
    }

    console.log('listing found')
    return (
        <div className="listing-details-wrapper">
            <div className="listing">
                <Link to="/">← Back to Listings</Link>
                <h1>{listing.name}</h1>
                <h3>{listing.address}</h3>
                <h3>{listing.hours}</h3>
                <p>{listing.description}</p>
            </div>
            <div className="leaflet-map-container">
                <LeafletMap className="leaflet-map" lat={listing.lat} lng={listing.lng}/>
            </div>
        </div>
    )

}

export default ListingDetails