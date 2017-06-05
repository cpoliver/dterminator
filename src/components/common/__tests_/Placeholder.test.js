import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import { Placeholder } from '../Placeholder';

const render = () => shallow(
  <Placeholder iconName="account" />
);

describe('the Placeholder component', () => {
  it('should match the snapshot', () => {
    const component = render();

    expect(toJson(component)).toMatchSnapshot();
  });
});
