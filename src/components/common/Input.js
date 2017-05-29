import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormInput } from 'react-native-elements';

class Input extends Component {
  state = { value: '' }

  componentWillMount() {
    this.setState({ value: this.props.value });
  }

  render() {
    const { onChangeValue } = this.props;
    const { value } = this.state;

    return (
      <FormInput
        value={value}
        autoCapitalize="none"
        autoCorrect={false}
        onBlur={() => onChangeValue(value)}
        onChangeText={text => this.setState({ value: text })}
      />
    );
  }
}

Input.defaultProps = {
  value: ''
};

Input.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeValue: PropTypes.func.isRequired
};

export { Input };
