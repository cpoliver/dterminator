import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View } from 'react-native';
import { Icon } from 'react-native-elements';

import { Input } from './Input';
import { colors } from '../../styles';

const EditableListItem = ({ value, onChangeValue, onDeleteButtonPress }) => (
  <View style={styles.container}>
    <View style={styles.inputContainer}>
      <Input
        value={value}
        onChangeValue={onChangeValue}
      />
    </View>
    <View>
      <Icon
        onPress={onDeleteButtonPress}
        name="trash-o"
        type="font-awesome"
        size={18}
        color={colors.background}
        reverse
      />
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderColor: colors.border,
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
  value: PropTypes.string.isRequired,
  onChangeValue: PropTypes.func.isRequired,
  onDeleteButtonPress: PropTypes.func.isRequired
};

export { EditableListItem };
