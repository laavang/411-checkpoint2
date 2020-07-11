

export const logIn = (user) => {
    return {
        type: 'LOG_IN',
        value: user
    }
}

export const addListing = (listing) => {
    return {
        type: 'ADD_LISTING',
        value: listing
    }
}

export const deleteListing = (index) => {
    return {
        type: 'DELETE_LISTING',
        value: index
    }
}


export const generateMap = (address) => {
    return {
        type: 'GENERATE_MAP',
        value: address
    }
}



// export const fetchMakes = () => {
//     return (dispatch) => {
//         fetch(url)
//             .then(res => res.json())
//             .then(response => {
//                 const action = {
//                     type: 'FETCH_MAKES',
//                     value: response.Results
//                 }
//                 dispatch(action)
//             })
//     }
// }
