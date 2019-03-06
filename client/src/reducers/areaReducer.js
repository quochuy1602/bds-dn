import { SET_LIST_AREA,SET_LIST_AREA_LOCATION ,SET_ADD_AREA} from '../actions/types';
import isEmpty from '../validation/is-empty';

const initialState = {
    listArea: [],
    area:{}
}

export default function(state = initialState, action ) {
    switch(action.type) {
        case SET_LIST_AREA:
            return {
                ...state,
                listArea: action.payload
            }
        case SET_LIST_AREA_LOCATION:
            return {
                ...state,
                listArea: action.payload
            }

        default:
            return state;
    }
}
