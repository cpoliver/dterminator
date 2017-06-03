import { combineReducers } from 'redux';

import decisionsReducer from './decisionsReducer';
import routeReducer from './routeReducer';
import selectedDecisionReducer from './selectedDecisionReducer';

export default combineReducers({
  decisions: decisionsReducer,
  route: routeReducer,
  selectedDecision: selectedDecisionReducer
});
