import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
import authReducer from './authReducer';
import homeReducer from './homeReducer';
import areaReducer from './areaReducer';
export default combineReducers({
    errors: errorReducer,
    auth: authReducer,
    home:homeReducer,
    area:areaReducer
});
