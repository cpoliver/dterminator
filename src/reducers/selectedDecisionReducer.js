import { append, assocPath, complement, evolve, filter, isNil } from 'ramda';

import {
  ADD_OPTION,
  REMOVE_OPTION,
  SELECT_DECISION,
  UPDATE_OPTION,
  UPDATE_DECISION
} from '../actions/deciderActions';

const initState = {};

const removeNullOptions = state => evolve({ options: filter(complement(isNil)) }, state);

const selectedDecisionReducer = (state = initState, action = {}) => {
  const { type, payload = {} } = action;

  const actions = {
    [ADD_OPTION]: evolve({ options: append('') }, state),
    [REMOVE_OPTION]: assocPath(['options', payload.index], null, state),
    [SELECT_DECISION]: payload,
    [UPDATE_OPTION]: assocPath(['options', payload.index], payload.value, state),
    [UPDATE_DECISION]: assocPath(['name'], payload, state)
  };

  const newState = actions[type] || state;
  return removeNullOptions(newState);
};

export default selectedDecisionReducer;
