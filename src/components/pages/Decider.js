import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';

import pageStyles from './pageStyles';
import { selectDecision } from '../../actions/deciderActions';
import { Header } from '../common';

const Decider = ({ decisions, selectDecision }) => (
  <View style={pageStyles.view}>
    <Header>Decider</Header>
    <List style={{ flex: 1 }}>
    {
      decisions.map((item, index) => (
        <ListItem key={index} title={item.name} onPress={() => {
          selectDecision(item);
          Actions.decisionDetail();
        }} />
      ))
    }
    </List>
  </View>
);

Decider.propTypes = {
  decisions: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      options: PropTypes.arrayOf(PropTypes.string)
    })
  ),
  selectDecision: PropTypes.func.isRequired
};

const mapStateToProps = ({ decisions }) => ({ decisions });

const mapDispatchToProps = dispatch => ({
  selectDecision: decision => dispatch(selectDecision(decision))
});

const connected = connect(mapStateToProps, mapDispatchToProps)(Decider);

export { connected as Decider };
