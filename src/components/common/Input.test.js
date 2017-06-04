import 'react-native';
import React from 'react';
import { FormInput } from 'react-native-elements';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import { Input } from './Input';

const onChangeValueStub = jest.fn();
const render = () => shallow(
  <Input value="some text" onChangeValue={onChangeValueStub} />
);

describe('the Input component', () => {
  it('should match the snapshot', () => {
    const component = render();

    expect(toJson(component)).toMatchSnapshot();
  });

  it('should set state.value to props.value', () => {
    const component = render();

    expect(component.state()).toEqual({ value: 'some text' });
  });

  describe('when the form input loses focus', () => {
    it('should call the function passed in the onChangeValue prop', () => {
      const component = render();
      const formInput = component.find(FormInput);

      formInput.simulate('blur');
      expect(onChangeValueStub).toHaveBeenCalledTimes(1);
    });
  });

  describe('when the form input text changes', () => {
    it('should call the function passed in the onChangeValue prop', () => {
      const component = render();
      const formInput = component.find(FormInput);
      const newText = 'new text';

      formInput.simulate('changeText', newText);
      expect(component.state()).toEqual({ value: newText });
    });
  });
});
