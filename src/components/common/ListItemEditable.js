import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View } from 'react-native';
import { FormInput, Icon } from 'react-native-elements';

const ListItemEditable = ({ value }) => (
  <View style={styles.container}>
    <View style={styles.inputContainer}>
      <FormInput value={value} />
    </View>
    <View style={{ }}>
      <Icon name="trash-o" type="font-awesome" size={18} color="#201b21" reverse />
    </View>
  </View>
);

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
  value: PropTypes.string.isRequired
};

export { ListItemEditable };
