import { combineReducers } from 'redux';
import { dataReducer } from './users/reducer';
import { datetime } from './datetime/reducer';

const rootReducer = combineReducers({ users: dataReducer, datetime });

export default rootReducer;
