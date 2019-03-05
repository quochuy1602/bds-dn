import { SET_LIST_AREA } from '../actions/types';
import isEmpty from '../validation/is-empty';

const initialState = {
    listArea: [],
}

export default function(state = initialState, action ) {
    switch(action.type) {
        case SET_LIST_AREA:
            return {
                ...state,
                listArea: action.payload
            }
        default:
            return state;
    }
}
