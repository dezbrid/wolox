import React from 'react';
import {
    LOGIN_ACTION,
} from './Constant/actionType'

export const StoreContext = React.createContext();

export const initialState = {
    sign_in: [],
    books: [],
    session_active: false
}

export const storeReducer = (state, action) => {
    switch (action.type) {
        case LOGIN_ACTION:
            return { ...state, session_active:  action.payload }
        default:
            return state
    }

}