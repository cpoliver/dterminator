import { SELECT_DECISION } from '../actions/deciderActions';
import decisions from '../data/decisions.json';

const initState = {
  decisions,
  selectedDescision: {},
  outcome: {}
};

const deciderReducer = (state = initState, { type, payload }) => {
  const actions = {
    [SELECT_DECISION]: Object.assign({}, state, payload)
  };

  return actions[type] || state;
};

export default deciderReducer;
