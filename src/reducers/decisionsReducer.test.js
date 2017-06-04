import decisions from '../data/decisions.json';

import reducer from './DecisionsReducer';

describe('the decisions reducer', () => {
  it('should return the correct initial state', () => {
    const actual = reducer();

    expect(actual).toEqual(decisions);
  });

  describe('when called with an unrelated action type', () => {
    it('should return the unmodified state', () => {
      const actual = reducer(decisions, { type: 'SOME_ACTION' });

      expect(actual).toEqual(decisions);
    });
  });
});
