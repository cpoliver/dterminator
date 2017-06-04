export const ADD_OPTION    = 'ADD_OPTION';
export const REMOVE_OPTION = 'REMOVE_OPTION';
export const UPDATE_OPTION = 'UPDATE_OPTION';

export const ADD_DECISION    = 'ADD_DECISION';
export const REMOVE_DECISION = 'REMOVE_DECISION';
export const SELECT_DECISION = 'SELECT_DECISION';
export const UPDATE_DECISION = 'UPDATE_DECISION';
export const UPDATE_DECISION_NAME = 'UPDATE_DECISION_NAME';

export const addOption = () => ({
  type: ADD_OPTION
});

export const removeOption = index => ({
  type: REMOVE_OPTION,
  payload: { index }
});

export const updateOption = option => ({
  type: UPDATE_OPTION,
  payload: option
});

export const addDecision = decision => ({
  type: ADD_DECISION,
  payload: decision
});

export const removeDecision = decision => ({
  type: REMOVE_DECISION,
  payload: decision
});

export const selectDecision = decision => ({
  type: SELECT_DECISION,
  payload: decision
});

export const updateDecision = decision => ({
  type: UPDATE_DECISION,
  payload: decision
});

export const updateDecisionName = decisionName => ({
  type: UPDATE_DECISION_NAME,
  payload: decisionName
});
