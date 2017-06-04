import decisions from '../data/decisions.json';

import { UPDATE_DECISION } from '../actions/deciderActions';
import reducer from './savedDecisionsReducer';

describe('the saved decisions reducer', () => {
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

  it('should update the decisions with a given decision', () => {
    const newDecision = { id: '001', name: 'New decision', options: ['1', '2', '3'] };
    const actual = reducer(decisions, { type: UPDATE_DECISION, payload: newDecision });

    expect(actual).toEqual([
      decisions[0],
      newDecision,
      decisions[2],
      decisions[3]
    ]);
  });
});
