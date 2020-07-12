import { combineReducers } from 'redux'
import { LeafletProvider } from 'react-leaflet';

const listings = (state = [], action) => {
    switch (action.type) {
        case 'ADD_LISTING':
            console.log('Action value ', action.value)
            return [...state, action.value];
        case 'DELETE_LISTING':
            const newState = [ ...state ]
            newState.splice(action.value, 1);
            return newState;
        default:
            return state
    }
}

const map = (state = {lat: 30.274, lng: 97.740, zoom: 13,}) => state



const user = (state = { username: null, password: null, isLoggedIn: false }, action) => {
    switch (action.type) {
        case 'LOG_IN':
            const newUser = action.value;
            console.log("New user: ", newUser);
            return newUser;
        case 'LOG_OUT':
            const emptyUser = { username: null, password: null, isLoggedIn: false };
            document.cookie = 'isLoggedIn=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
            return emptyUser;
        default:
            return state
    }
}


export default combineReducers({ listings, map, user })