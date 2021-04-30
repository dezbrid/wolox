import React from 'react';
import {
    LOGIN_ACTION,
    ASYNCSTORAGE_ACTION,
    LANGUAGES_ACTION,
    LOGOUT_ACTION,
    BOOKS_ACTION
} from './Constant/actionType'

export const StoreContext = React.createContext();

export const initialState = {
    sign_in: [],
    books: [],
    session_active: false,
    languages: 'en',
    user: {}
}

export const storeReducer = (state, action) => {
    switch (action.type) {
        case LOGIN_ACTION:
            return { ...state, session_active: true, user: { ...action.payload } }
        case ASYNCSTORAGE_ACTION:
            return { ...state, ...action.payload }
        case LANGUAGES_ACTION:
            return { ...state, languages: action.payload }
        case LOGOUT_ACTION:
            return { ...initialState }
        case BOOKS_ACTION:
            return { ...state, books: action.payload }
        default:
            return state
    }

}