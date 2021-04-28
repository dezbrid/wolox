import React from 'react';

export const StoreContext = React.createContext();

export const initialState = {
    sign_in: [],
    books: []
}

export const storeReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            return { ...state, sign_in: [...state.sign_in, action.payload] }
        default:
            return state
    }

}