import 'react-native';
import React from 'react';
import { Icon } from 'react-native-elements';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import { Input } from '../Input';
import { EditableListItem } from '../EditableListItem';

const onChangeValueStub = jest.fn();
const onDeleteButtonPressStub = jest.fn();

const render = () => shallow(
  <EditableListItem
    value="some text"
    onChangeValue={onChangeValueStub}
    onDeleteButtonPress={onDeleteButtonPressStub} />
);

describe('the EditableListItem component', () => {
  it('should match the snapshot', () => {
    const component = render();

    expect(toJson(component)).toMatchSnapshot();
  });

  it('should pass props.onChangeValue to the input component', () => {
    const component = render();
    const input = component.find(Input);

    expect(input.props().onChangeValue).toEqual(onChangeValueStub);
  });

  it('should pass props.onDeleteButtonPress to the button component', () => {
    const component = render();
    const button = component.find(Icon);

    expect(button.props().onPress).toEqual(onDeleteButtonPressStub);
  });
});
