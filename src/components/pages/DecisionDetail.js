import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { FormInput, FormLabel, List, ListItem } from 'react-native-elements';
import { connect } from 'react-redux';

import pageStyles from './pageStyles';
import { Header, ListItemEditable } from '../common';

const DecisionDetail = ({ name, options }) => (
  <View style={pageStyles.view}>
    <Header>Decision Detail</Header>
    <FormLabel>Name</FormLabel>
    <FormInput value={name} />
    <List>
    {
      options.map((option, index) => (
        <ListItem key={index} component={() => <ListItemEditable value={option} />} />
      ))
    }
    </List>
  </View>
);

DecisionDetail.propTypes = {
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired
};

const mapStateToProps = ({ decider }) => ({
  name: decider.selectedDecision.name,
  options: decider.selectedDecision.options
});

const connected = connect(mapStateToProps)(DecisionDetail);

export { connected as DecisionDetail };
