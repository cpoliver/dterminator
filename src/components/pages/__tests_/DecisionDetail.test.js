import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import decisions from '../../../data/decisions.json';
import { DecisionDetailComponent as DecisionDetail,  } from '../DecisionDetail';

const { name, options } = decisions[0];

const stubs = {
  addOption: jest.fn(),
  removeOption: jest.fn(),
  updateOption: jest.fn(),
  updateDecision: jest.fn()
};

const render = () => shallow(
  <DecisionDetail name={name} options={options} {...stubs} />
);

describe('the DecisionDetail component', () => {
  it('should match the snapshot', () => {
    const component = render();

    expect(toJson(component)).toMatchSnapshot();
  });
});
