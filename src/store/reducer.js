import { combineReducers } from 'redux';

const Counter = (state = 0, action) => state;

const rootReducer = combineReducers({ Counter });

export default rootReducer;
