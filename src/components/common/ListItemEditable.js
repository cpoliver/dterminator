import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View } from 'react-native';
import { FormInput, Icon } from 'react-native-elements';

class ListItemEditable extends Component {
  state = { value: '' }

  componentWillMount() {
    this.setState({ value: this.props.value });
  }

  render() {
    const { id, onChangeValue } = this.props;
    const { value } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <FormInput
            value={value}
            onChangeText={text => this.setState({ value: text })}
            onBlur={() => onChangeValue({ id, value })}
          />
        </View>
        <View>
          <Icon name="trash-o" type="font-awesome" size={18} color="#201b21" reverse />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderColor: '#ccd2d8',
    flexDirection: 'row',
    padding: 10
  },
  inputContainer: {
    flex: 1,
    marginTop: 10
  }
});

ListItemEditable.defaultProps = {
  value: ''
};

ListItemEditable.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  value: PropTypes.string.isRequired,
  onChangeValue: PropTypes.func.isRequired,
};

export { ListItemEditable };