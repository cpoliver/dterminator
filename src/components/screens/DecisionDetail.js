import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView, StyleSheet, View } from 'react-native';
import { FormLabel, Icon, List, ListItem } from 'react-native-elements';
import { connect } from 'react-redux';

import { addOption, removeOption, updateOption, updateDecisionName } from '../../actions/deciderActions';
import { colors, screenStyles } from '../../styles';
import { EditableListItem, Input } from '../common';

const createListItem = (index, value, removeOption, updateOption) => (
  <ListItem key={index} component={
    () => (
      <EditableListItem
        value={value}
        onDeleteButtonPress={removeOption(index)}
        onChangeValue={updateOption(index)}
      />
    )
  } />
);

const DecisionDetailComponent = ({ name, options = [], addOption, removeOption, updateOption, updateDecisionName }) => (
  <View style={screenStyles.view}>
    <ScrollView>
      <FormLabel>Name</FormLabel>
      <Input value={name} onChangeValue={updateDecisionName} />
      <List containerStyle={{ borderWidth: 0 }}>
      {
        options.map((value, index) => createListItem(index, value, removeOption, updateOption))
      }
      </List>
    </ScrollView>
    <View style={styles.buttonContainer}>
      <Icon name="add" reverse onPress={() => addOption()} />
    </View>
  </View>
);

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
  updateOption: PropTypes.func.isRequired,
  updateDecisionName: PropTypes.func.isRequired
};

const mapStateToProps = ({ selectedDecision }) => ({
  name: selectedDecision.name,
  options: selectedDecision.options
});

const mapDispatchToProps = dispatch => ({
  addOption: () => dispatch(addOption()),
  updateOption: index => value => dispatch(updateOption({ index, value })),
  removeOption: index => () => dispatch(removeOption(index)),
  updateDecisionName: decision => dispatch(updateDecisionName(decision))
});

const DecisionDetail = connect(mapStateToProps, mapDispatchToProps)(DecisionDetailComponent);

export { DecisionDetail, DecisionDetailComponent };
