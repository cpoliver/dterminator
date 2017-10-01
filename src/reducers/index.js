import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import savedDecisionsReducer from './savedDecisionsReducer';

export default combineReducers({
  form: formReducer,
  decisions: savedDecisionsReducer
});
