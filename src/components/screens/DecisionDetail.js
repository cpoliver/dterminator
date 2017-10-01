import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView, StyleSheet, View } from 'react-native';
import { FormLabel, Icon, List, ListItem } from 'react-native-elements';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import { addOption, removeOption } from '../../actions/deciderActions';
import { colors, screenStyles } from '../../styles';
import { EditableListItem, Input } from '../common';

const createListItem = (index, value, removeOption) => (
  <ListItem key={index} component={
    () => (
      <EditableListItem
        value={value}
        onDeleteButtonPress={removeOption(index)}
      />
    )
  } />
);

const submit = values => {
  console.log('submitting form', values);
};

const DecisionDetailComponent = ({ navigation, addOption, removeOption, handleSubmit }) => {
  const { name, options = [] } = navigation.state.params;

  return (
    <View style={screenStyles.view}>
      <ScrollView>
        <FormLabel>Name</FormLabel>
        <Field name="decisionName" component={({ input: { onChange } }) => <Input value={name} onChangeValue={onChange} />} />
        <List containerStyle={{ borderWidth: 0 }}>
        {
          options.map((value, index) => createListItem(index, value, removeOption))
        }
        </List>
      </ScrollView>
      <View style={styles.buttonContainer}>
        <Icon name="save" reverse onPress={handleSubmit(submit)} />
        <Icon name="add" reverse onPress={() => addOption()} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'flex-end',
    backgroundColor: colors.lightest,
    padding: 4
  }
});

DecisionDetailComponent.propTypes = {
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  addOption: PropTypes.func.isRequired,
  removeOption: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  addOption: () => dispatch(addOption()),
  removeOption: optionName => () => dispatch(removeOption(optionName))
});

const DecisionDetail = reduxForm({ form: 'decisionDetail' })(
  connect(null, mapDispatchToProps)(DecisionDetailComponent)
);

export { DecisionDetail, DecisionDetailComponent };
