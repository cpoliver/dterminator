import { append } from 'ramda';

import {
  ADD_OPTION,
  REMOVE_OPTION,
  SELECT_DECISION,
  UPDATE_OPTION,
  UPDATE_DECISION_NAME
} from '../../actions/deciderActions';

import reducer from '../selectedDecisionReducer';

const mockState = {
  name: 'decision name',
  options: [
    '1st option',
    '2nd option',
    '3rd option'
  ]
};

describe('the selected decision reducer', () => {
  it('should return the correct initial state', () => {
    const actual = reducer();

    expect(actual).toEqual({});
  });

  describe('when called with an unrelated action type', () => {
    it('should return the unmodified state', () => {
      const actual = reducer(mockState, { type: 'SOME_ACTION' });

      expect(actual).toEqual(mockState);
    });
  });

  it('should add a new option to the state', () => {
    const actual = reducer(mockState, { type: ADD_OPTION });

    expect(actual).toEqual({
      name: mockState.name,
      options: append('', mockState.options)
    });
  });

  it('should remove a given option from the state', () => {
    const actual = reducer(mockState, { type: REMOVE_OPTION, payload: { index: 1 } });

    expect(actual).toEqual({
      name: mockState.name,
      options: [
        '1st option',
        '3rd option'
      ]
    });
  });

  it('should replace the state with a new selected decision', () => {
    const newDecision = { new: true };
    const actual = reducer(mockState, { type: SELECT_DECISION, payload: newDecision });

    expect(actual).toEqual(newDecision);
  });

  it('should update a given option in the the state', () => {
    const updatedOption = { index: 0, value: 'updated' };
    const actual = reducer(mockState, { type: UPDATE_OPTION, payload: updatedOption });

    expect(actual).toEqual({
      name: mockState.name,
      options: [
        'updated',
        '2nd option',
        '3rd option'
      ]
    });
  });

  it('should update the selected decision name in the state', () => {
    const newName = 'new decision name';
    const actual = reducer(mockState, { type: UPDATE_DECISION_NAME, payload: newName });

    expect(actual).toEqual({
      name: newName,
      options: mockState.options
    });
  });
});
