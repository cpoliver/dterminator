import 'react-native';
import React from 'react';
import { ListItem } from 'react-native-elements';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import decisions from '../../../data/decisions.json';
import { DecisionListComponent as DecisionList } from '../DecisionList';

const selectDecisionStub = jest.fn();
const navigationStub = { navigate: jest.fn() };

const render = () => shallow(
  <DecisionList
    decisions={decisions}
    selectDecision={selectDecisionStub}
    navigation={navigationStub} />
);

describe('the DecisionList component', () => {
  it('should match the snapshot', () => {
    const component = render();

    expect(toJson(component)).toMatchSnapshot();
  });

  describe('when pressing a list item', () => {
    it('should call the relevant functions', () => {
      const listItem = render().find(ListItem).first();

      listItem.simulate('press');

      expect(selectDecisionStub).toHaveBeenCalledTimes(1);
      expect(navigationStub.navigate).toHaveBeenCalledTimes(1);
    });
  });
});
