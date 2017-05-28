import { combineReducers } from 'redux';

import decisionsReducer from './decisionsReducer';
import selectedDecisionReducer from './selectedDecisionReducer';

export default combineReducers({
  decisions: decisionsReducer,
  selectedDecision: selectedDecisionReducer
});
