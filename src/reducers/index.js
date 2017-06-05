import { combineReducers } from 'redux';

import savedDecisionsReducer from './savedDecisionsReducer';
import selectedDecisionReducer from './selectedDecisionReducer';

export default combineReducers({
  decisions: savedDecisionsReducer,
  selectedDecision: selectedDecisionReducer
});
