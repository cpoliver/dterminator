import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import { Profile } from '../Profile';

const render = () => shallow(<Profile />);

describe('the Profile component', () => {
  it('should match the snapshot', () => {
    const component = render();

    expect(toJson(component)).toMatchSnapshot();
  });
});
