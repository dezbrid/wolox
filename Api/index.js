import axios from 'axios';
import {
    URL_API,
} from '../Constant/url';

export const apiCall = (url, data, headers, method) => axios({
    method,
    url: URL_API + url,
    data,
    headers
});