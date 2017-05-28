import { assocPath, complement, evolve, filter, isNil } from 'ramda';

import decisions from '../data/decisions.json';
import { REMOVE_OPTION, UPDATE_OPTION } from '../actions/deciderActions';

const initState = decisions[0];

const removeNullOptions = state => evolve({ options: filter(complement(isNil)) }, state);

const selectedDecisionReducer = (state = initState, { type, payload = {} }) => {
  const actions = {
    [REMOVE_OPTION]: assocPath(['options', payload.id], null, state),
    [UPDATE_OPTION]: assocPath(['options', payload.id], payload.value, state)
  };

  const newState = actions[type] || state;
  return removeNullOptions(newState);
};

export default selectedDecisionReducer;
