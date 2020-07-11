import React from 'react'
import { Switch, Route, Redirect } from 'react-router'
import cookie from 'cookie'
import Login from './containers/Login'
import ListingDetails from './containers/ListingDetails'
import Listings from './containers/Listings'
import AddListing from './containers/AddListing'

const checkAuth = () => {
    const cookies = cookie.parse(document.cookie)
    return cookies["isLoggedIn"] ? true : false
}
const ProtectedRoute = ({component: Component, ...rest}) => {
    return (
        <Route
        {...rest}
        render={(props) => checkAuth()
            ? <Component {...props} />
            : <Redirect to="/login" />}
        />
    )
}

const Router = () => {
    return (
            <Switch>
                <Route exact path="/" component={Listings} />
                <Route path="/details" component={ListingDetails} />
                <Route path="/login" component={Login} />
                <ProtectedRoute path="/add" component={AddListing} />
            </Switch>
    )
}

export default Router