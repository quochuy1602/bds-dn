import axios from 'axios';
import { GET_ERRORS, SET_LIST_PRODUCT,SET_LIST_BLOCK,GET_LOCATION } from './types';
const apiUrl = 'http://192.168.2.90:5000';
export const getLocation = (coordinates, history) => dispatch => {
    axios.post(`${apiUrl}/api/products/getLocation`, coordinates)
        .then(res =>{
            dispatch(setListProduct(res.data.products));
            dispatch(setListBlock(res.data.blocks));
        })
        .catch(err => {
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            });
        });
}
export const setListProduct = data => {
    return {
        type: SET_LIST_PRODUCT,
        payload: data
    }
}
export const setListBlock = data => {
    return {
        type: SET_LIST_BLOCK,
        payload: data
    }
}
export const getLocationLocal = () => {
    const geolocation = navigator.geolocation;

    const location = new Promise((resolve, reject) => {
        if (!geolocation) {
            reject(new Error('Not Supported'));
        }

        geolocation.getCurrentPosition((position) => {
            resolve(position);
        }, () => {
            reject (new Error('Permission denied'));
        });
    });

    return {
        type: GET_LOCATION,
        payload: location
    }
};

