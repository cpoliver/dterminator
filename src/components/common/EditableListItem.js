import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View } from 'react-native';
import { Icon } from 'react-native-elements';

import { Input } from './Input';

const EditableListItem = ({ id, value, onChangeValue, onDeleteButtonPress }) => (
  <View style={styles.container}>
    <View style={styles.inputContainer}>
      <Input
        id={id}
        value={value}
        onChangeValue={onChangeValue}
      />
    </View>
    <View>
      <Icon
        onPress={() => onDeleteButtonPress({ id, value })}
        name="trash-o"
        type="font-awesome"
        size={18}
        color="#201b21"
        reverse
      />
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

EditableListItem.defaultProps = {
  value: ''
};

EditableListItem.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  value: PropTypes.string.isRequired,
  onChangeValue: PropTypes.func.isRequired,
  onDeleteButtonPress: PropTypes.func.isRequired
};

export { EditableListItem };
