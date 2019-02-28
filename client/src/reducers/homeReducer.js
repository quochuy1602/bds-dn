import { SET_LIST_PRODUCT } from '../actions/types';
import isEmpty from '../validation/is-empty';

const initialState = {
    listData: []
}

export default function(state = initialState, action ) {
    switch(action.type) {
        case SET_LIST_PRODUCT:
            return {
                ...state,
                listData: action.payload
            }
        default:
            return state;
    }
}
