import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import { connect } from 'react-redux';

import { screenStyles } from '../../styles';
import { selectDecision } from '../../actions/deciderActions';
import { Header } from '../common';

const createListItem = (decision, index, navigation) => (
  <ListItem
    key={index}
    title={decision.name}
    onPress={() => navigation.navigate('decisionDetail', decision)} />
);

const DecisionListComponent = ({ decisions, selectDecision, navigation }) => (
  <View style={screenStyles.view}>
    <Header>Decision List</Header>
    <List style={{ flex: 1 }}>
      {decisions.map((decision, index) => createListItem(decision, index, navigation))}
    </List>
  </View>
);

DecisionListComponent.propTypes = {
  decisions: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      options: PropTypes.arrayOf(PropTypes.string)
    })
  ),
  selectDecision: PropTypes.func.isRequired,
  navigation: PropTypes.object.isRequired
};

const mapStateToProps = ({ decisions }) => ({ decisions });

const DecisionList = connect(mapStateToProps)(DecisionListComponent);

export { DecisionList, DecisionListComponent };
