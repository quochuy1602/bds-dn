import { SET_LIST_PRODUCT,SET_LIST_BLOCK } from '../actions/types';
import isEmpty from '../validation/is-empty';

const initialState = {
    listData: [],
    listBlock:[]
}

export default function(state = initialState, action ) {
    switch(action.type) {
        case SET_LIST_PRODUCT:
            return {
                ...state,
                listData: action.payload
            }
        case SET_LIST_BLOCK:
            return {
                ...state,
                listBlock: action.payload
            }
        default:
            return state;
    }
}
