import { combineReducers } from 'redux';
import sessionReducer from '../features/session/sessionSlice';

export default combineReducers({
  session: sessionReducer
});
