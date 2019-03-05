import axios from 'axios';
import { GET_ERRORS, SET_LIST_AREA } from './types';
const apiUrl = 'http://192.168.2.90:5000';
export const getListArea = (city, history) => dispatch => {
    axios.get(`${apiUrl}/api/areas/getCity/`+city)
        .then(res =>{
            let areas =  res.data.list.map(ls => {
                return {"value":ls._id,"label":ls.name}
            })
            dispatch(setListArea(areas));
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

