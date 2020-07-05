import { combineReducers } from 'redux'

const user = (state = {username: null, isLoggedIn: false}) => state

const listings = (state = []) => state

const map = (state = null) => state

export default combineReducers({ user, listings, map })