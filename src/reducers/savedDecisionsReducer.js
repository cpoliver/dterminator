import { findIndex, propEq, update } from 'ramda';

import decisions from '../data/decisions.json';
import { UPDATE_DECISION } from '../actions/deciderActions';

const initState = decisions;

const savedDecisionsReducer = (state = initState, action = {}) => {
  const { type, payload = {} } = action;

  const actions = {
    [UPDATE_DECISION]: update(
      findIndex(propEq('id', payload.id))(state),
      payload
    )(state)
  };

  return actions[type] || state;
};

export default savedDecisionsReducer;
