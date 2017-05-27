import { combineReducers } from 'redux';

import deciderReducer from './deciderReducer';

export default combineReducers({
  decider: deciderReducer
});
