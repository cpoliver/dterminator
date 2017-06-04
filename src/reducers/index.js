import { combineReducers } from 'redux';

import routeReducer from './routeReducer';
import savedDecisionsReducer from './savedDecisionsReducer';
import selectedDecisionReducer from './selectedDecisionReducer';

export default combineReducers({
  route: routeReducer,
  decisions: savedDecisionsReducer,
  selectedDecision: selectedDecisionReducer
});
