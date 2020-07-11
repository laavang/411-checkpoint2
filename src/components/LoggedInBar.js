import React from 'react';


const LoggedInBar = (props) => {

    return (
        <div className="logged-in-bar">Logged in as: {props.username}</div>
    )
}

export default LoggedInBar