import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import customersReducer from './customersReducer';

const rootReducer = combineReducers({
  customersReducer,
  loginReducer,
});

export default rootReducer;
