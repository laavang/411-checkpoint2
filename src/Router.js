    // src/Router.js
    import { Switch, Route } from 'react-router'
    import React from 'react'
    import Login from './components/Login'
    import Listing from './components/Listing'
    import Listings from './components/Listings'
    import AddListing from './components/AddListing'

    const Router = () => {
        return (
            <Switch>
                <Route path="/login" component={Login} />
                <Route exact path="/" component={Listings} />
                <Route path="/details" component={Listing} />
                <Route path="/add" component={AddListing} />
            </Switch>
        )
    }

    export default Router