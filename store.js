import React from 'react';
import {
    LOGIN_ACTION,
    ASYNCSTORAGE_ACTION,
    LANGUAGES_ACTION,
    LOGOUT_ACTION
} from './Constant/actionType'

export const StoreContext = React.createContext();

export const initialState = {
    sign_in: [],
    books: [],
    session_active: false,
    languages: 'en'
}

export const storeReducer = (state, action) => {
    switch (action.type) {
        case LOGIN_ACTION:
            return { ...state, session_active: action.payload }
        case ASYNCSTORAGE_ACTION:
            return { ...state, ...action.payload }
        case LANGUAGES_ACTION:
            return { ...state, languages: action.payload }
        case LOGOUT_ACTION:
            return {...initialState}
        default:
            return state
    }

}