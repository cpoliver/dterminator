export const ADD_DECISION    = 'ADD_DECISION';
export const REMOVE_DECISION = 'REMOVE_DECISION';
export const UPDATE_DECISION = 'UPDATE_DECISION';

export const addDecision = decision => ({
  type: ADD_DECISION,
  payload: decision
});

export const removeDecision = decision => ({
  type: REMOVE_DECISION,
  payload: decision
});

export const updateDecision = decision => ({
  type: UPDATE_DECISION,
  payload: decision
});
