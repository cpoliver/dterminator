import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import { Header } from '../Header';

const render = () => shallow(
  <Header iconName="account">
    Header Text
  </Header>
);

describe('the Header component', () => {
  it('should match the snapshot', () => {
    const component = render();

    expect(toJson(component)).toMatchSnapshot();
  });
});
