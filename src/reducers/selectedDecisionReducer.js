import { assocPath } from 'ramda';

import decisions from '../data/decisions.json';
import { UPDATE_OPTION } from '../actions/deciderActions';

const initState = decisions[0];

const selectedDecisionReducer = (state = initState, { type, payload = {} }) => {
  const actions = {
    [UPDATE_OPTION]: assocPath(['options', payload.id], payload.value, state)
  };

  return actions[type] || state;
};

export default selectedDecisionReducer;
