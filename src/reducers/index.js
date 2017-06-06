import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import savedDecisionsReducer from './savedDecisionsReducer';
import selectedDecisionReducer from './selectedDecisionReducer';

export default combineReducers({
  form: formReducer,
  decisions: savedDecisionsReducer,
  selectedDecision: selectedDecisionReducer
});
