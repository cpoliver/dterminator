import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView, StyleSheet, View } from 'react-native';
import { FormInput, FormLabel, Icon, List, ListItem } from 'react-native-elements';
import { connect } from 'react-redux';

import { addOption, removeOption, updateOption } from '../../actions/deciderActions';
import pageStyles from './pageStyles';
import { Header, ListItemEditable } from '../common';

const createListItem = (index, value, removeOption, updateOption) => (
  <ListItem key={index} component={
    () => (
      <ListItemEditable
        id={index}
        value={value}
        onDeleteButtonPress={removeOption}
        onChangeValue={updateOption}
      />
    )
  } />
);

const DecisionDetail = ({ name, options, addOption, removeOption, updateOption }) => (
  <View style={pageStyles.view}>
    <Header>Decision Detail</Header>
    <FormLabel>Name</FormLabel>
    <FormInput value={name} />
    <ScrollView>
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
  updateOption: PropTypes.func.isRequired
};

const mapStateToProps = ({ selectedDecision }) => ({
  name: selectedDecision.name,
  options: selectedDecision.options
});

const mapDispatchToProps = (dispatch) => ({
  addOption: () => dispatch(addOption()),
  updateOption: option => dispatch(updateOption(option)),
  removeOption: option => dispatch(removeOption(option))
});

const connected = connect(mapStateToProps, mapDispatchToProps)(DecisionDetail);

export { connected as DecisionDetail };
