

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