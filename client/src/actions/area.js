import axios from 'axios';
import { GET_ERRORS, SET_LIST_AREA } from './types';
const apiUrl = 'http://192.168.2.90:5000';
export const getLocation = (coordinates, history) => dispatch => {
    axios.post(`${apiUrl}/api/products/getLocation`, coordinates)
        .then(res =>{
            dispatch(setListArea(res.data));
        })
        .catch(err => {
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            });
        });
}
export const setListArea = data => {
    return {
        type: SET_LIST_AREA,
        payload: data
    }
}

