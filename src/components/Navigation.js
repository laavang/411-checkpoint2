import React from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import { Link } from 'react-router-dom'
import LoggedInBar from './LoggedInBar'

const Navigation = (props) => {

    const logOut = (e) => {
        e.preventDefault()
        props.logOut()
      }

    console.log(props.user);

    return (
        <div>
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
                            {(props.user && props.user.isLoggedIn) || document.cookie
                                ?
                                <li className="nav-list-item"
                                    onClick={logOut}>
                                    Log Out
                        </li>
                                :
                                <Link className="nav-link" to="/login">Log In</Link>
                            }
                        </li>
                        {(props.user && props.user.isLoggedIn) || document.cookie
                            ? <li>
                                <Link className="nav-link" to="/add">Add</Link>
                            </li>
                            : ""
                        }
                    </ul>
                </Toolbar>
            </AppBar>
            {(props.user && props.user.isLoggedIn) || document.cookie
                ?
                <LoggedInBar username={props.user.username}/>
                :
                ""
            }
        </div>
    )
}

export default Navigation