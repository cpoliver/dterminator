import { append, assocPath, complement, evolve, filter, isNil } from 'ramda';

import decisions from '../data/decisions.json';
import {
  ADD_OPTION,
  REMOVE_OPTION,
  SELECT_DECISION,
  UPDATE_OPTION,
  UPDATE_DECISION
} from '../actions/deciderActions';

const initState = decisions[3];

const removeNullOptions = state => evolve({ options: filter(complement(isNil)) }, state);

const selectedDecisionReducer = (state = initState, { type, payload = {} }) => {
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
