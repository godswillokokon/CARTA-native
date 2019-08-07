import { combineReducers } from 'redux';
import User from './User';
import Misc from './Misc';
export default combineReducers({
  user: User,
  misc: Misc,
});
