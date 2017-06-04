import { ActionConst } from 'react-native-router-flux';
import { assoc } from 'ramda';

const initState = {
  scene: {}
};

const routeReducer = (state = initState, action = {}) => {
  const { type, scene } = action;

  const actions = {
    [ActionConst.FOCUS]: assoc('scene', scene, state)
  };

  return actions[type] || state;
};

export default routeReducer;
