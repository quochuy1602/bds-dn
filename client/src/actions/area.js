import axios from 'axios';
import { GET_ERRORS, SET_LIST_AREA,SET_LIST_AREA_LOCATION } from './types';
const apiUrl = 'http://192.168.2.90:5000';
export const getListArea = (city, history) => dispatch => {
    axios.get(`${apiUrl}/api/areas/getCity/`+city)
        .then(res =>{
            let areas =  res.data.list.map(ls => {
                return {"value":ls._id,"label":ls.name,"geo":ls.geo}
            })
            dispatch(setListArea(areas));
        })
        .catch(err => {
            dispatch({
                type: GET_ERRORS,
                payload: err.message
            });
        });
}

export const getLocation = (coordinates, history) => dispatch => {
    axios.post(`${apiUrl}/api/areas/getLocation`,coordinates)
        .then(res =>{
            dispatch(setListAreaLocation(res.data.list));
        })
        .catch(err => {
            dispatch({
                type: GET_ERRORS,
                payload: err.message
            });
        });
}
export const add = (area, history) => dispatch => {
    axios.post(`${apiUrl}/api/areas/save`,area)
        .then(res =>{
            dispatch();
        })
        .catch(err => {
            dispatch({
                type: GET_ERRORS,
                payload: err.message
            });
        });
}


export const setListArea = data => {
    return {
        type: SET_LIST_AREA,
        payload: data
    }
}
export const setListAreaLocation = data => {
    return {
        type: SET_LIST_AREA_LOCATION,
        payload: data
    }
}
