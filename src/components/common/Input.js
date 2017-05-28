import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormInput } from 'react-native-elements';

class Input extends Component {
  state = { value: '' }

  componentWillMount() {
    this.setState({ value: this.props.value });
  }

  render() {
    const { id, onChangeValue } = this.props;
    const { value } = this.state;

    return (
      <FormInput
        value={value}
        autoCapitalize="none"
        autoCorrect={false}
        onBlur={() => onChangeValue({ id, value })}
        onChangeText={text => this.setState({ value: text })}
      />
    );
  }
}

Input.defaultProps = {
  value: ''
};

Input.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  value: PropTypes.string.isRequired,
  onChangeValue: PropTypes.func.isRequired
};

export { Input };
