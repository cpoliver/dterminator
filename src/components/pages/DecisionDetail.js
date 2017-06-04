import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView, StyleSheet, View } from 'react-native';
import { FormLabel, Icon, List, ListItem } from 'react-native-elements';
import { connect } from 'react-redux';

import { addOption, removeOption, updateOption, updateDecision } from '../../actions/deciderActions';
import pageStyles from './pageStyles';
import { EditableListItem, Header, Input } from '../common';

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

const DecisionDetail = ({ name, options, addOption, removeOption, updateOption, updateDecision }) => (
  <View style={pageStyles.view}>
    <Header />
    <ScrollView>
      <FormLabel>Name</FormLabel>
      <Input value={name} onChangeValue={updateDecision} />
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
    backgroundColor: '#f6f7fb',
    padding: 4
  }
});

DecisionDetail.propTypes = {
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  addOption: PropTypes.func.isRequired,
  removeOption: PropTypes.func.isRequired,
  updateOption: PropTypes.func.isRequired,
  updateDecision: PropTypes.func.isRequired
};

const mapStateToProps = ({ selectedDecision }) => ({
  name: selectedDecision.name,
  options: selectedDecision.options
});

const mapDispatchToProps = dispatch => ({
  addOption: () => dispatch(addOption()),
  updateOption: index => value => dispatch(updateOption({ index, value })),
  removeOption: index => () => dispatch(removeOption(index)),
  updateDecision: decision => dispatch(updateDecision(decision))
});

const connected = connect(mapStateToProps, mapDispatchToProps)(DecisionDetail);

export { connected as DecisionDetail };
