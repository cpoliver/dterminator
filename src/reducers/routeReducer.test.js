import { ActionConst } from 'react-native-router-flux';

import reducer from './routeReducer';

const mockState = {
  scene: {}
};

describe('the route reducer', () => {
  it('should return the correct initial state', () => {
    const actual = reducer();

    expect(actual).toEqual(mockState);
  });

  describe('when called with an unrelated action type', () => {
    it('should return the unmodified state', () => {
      const actual = reducer(mockState, { type: 'SOME_ACTION' });

      expect(actual).toEqual(mockState);
    });
  });

  it('should update the scene on focus', () => {
    const scene = { someScene: true };
    const actual = reducer(mockState, { type: ActionConst.FOCUS, scene });

    expect(actual).toEqual({ scene });
  });
});
