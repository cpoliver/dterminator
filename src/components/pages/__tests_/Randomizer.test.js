import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import { Randomizer } from '../Randomizer';

const render = () => shallow(
  <Randomizer />
);

describe('the Randomizer component', () => {
  it('should match the snapshot', () => {
    const component = render();

    expect(toJson(component)).toMatchSnapshot();
  });
});
