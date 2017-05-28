import { append, assocPath, complement, evolve, filter, isNil } from 'ramda';

import decisions from '../data/decisions.json';
import { ADD_OPTION, REMOVE_OPTION, UPDATE_OPTION } from '../actions/deciderActions';

const initState = decisions[3];

const removeNullOptions = state => evolve({ options: filter(complement(isNil)) }, state);

const selectedDecisionReducer = (state = initState, { type, payload = {} }) => {
  const actions = {
    [ADD_OPTION]: evolve({ options: append('') }, state),
    [REMOVE_OPTION]: assocPath(['options', payload.id], null, state),
    [UPDATE_OPTION]: assocPath(['options', payload.id], payload.value, state)
  };

  const newState = actions[type] || state;
  return removeNullOptions(newState);
};

export default selectedDecisionReducer;
