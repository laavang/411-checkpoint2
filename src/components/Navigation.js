import React from 'react'
import {AppBar, Toolbar,Typography} from '@material-ui/core'
import { Link } from 'react-router-dom'

const Navigation = () => {

    let isLoggedIn = true;

    return (
        <AppBar position="static" className="app-bar">
            <Toolbar>
                <Typography variant="h6" style={{ flexGrow: "1" }}>
                    ATX Vegan Food
                </Typography>
                <ul className="nav">
                    <li>
                        <Link className="nav-link" to="/">Listings</Link>
                    </li>
                        <li>
                            {isLoggedIn
                            ? <Link className="nav-link" to="/login">Login</Link>
                            : <Link className="nav-link" to="/login">Log Out</Link>}
                        </li>
                    <li>
                        <Link className="nav-link" to="/add">Add</Link>
                    </li>
                </ul>
            </Toolbar>
        </AppBar>
    )
}

export default Navigation