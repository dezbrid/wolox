import React from 'react';
import {
    LOGIN_ACTION,
    ASYNCSTORAGE_ACTION,
    LANGUAGES_ACTION,
    LOGOUT_ACTION,
    BOOKS_ACTION,
    IS_LOADING_ACTION,
    ALERT_INFO_ACTION
} from './Constant/actionType'

export const StoreContext = React.createContext();

export const initialState = {
    sign_in: [],
    books: [],
    session_active: false,
    languages: 'en',
    user: {},
    is_loading: false,
    alert_Info: { open: false, text: '', type: 'success' }
}

export const storeReducer = (state, action) => {
    switch (action.type) {
        case LOGIN_ACTION:
            return { ...state, session_active: true, user: { ...action.payload },is_loading:false };
        case ASYNCSTORAGE_ACTION:
            return { ...state, ...action.payload };
        case LANGUAGES_ACTION:
            return { ...state, languages: action.payload };
        case LOGOUT_ACTION:
            return { ...initialState };
        case BOOKS_ACTION:
            return { ...state, books: action.payload };
        case IS_LOADING_ACTION:
            return { ...state, is_loading: action.payload };
        case ALERT_INFO_ACTION:
            return { ...state, alert_Info: action.payload };
        default:
            return state
    }

}