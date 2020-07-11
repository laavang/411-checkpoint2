import React, { Comonent } from 'react';
import Map from './Map'



const ListingDetails = (props) => {

    let params = new URLSearchParams(document.location.search.substring(1));
    let id = params.get("id");
    parseInt(id)
    console.log(id)
    const listing = props.listings.find(listing => listing.id == id)
    console.log(listing);

    return (
        <div>
            <div className="listing">
                <h1>{listing.name}</h1>
                <h3>{listing.address}</h3>
                <h3>{listing.hours}</h3>
                <p>{listing.description}</p>
            </div>
        </div>
    )
}

export default ListingDetails