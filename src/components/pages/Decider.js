import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import { connect } from 'react-redux';

import pageStyles from './pageStyles';
import { Header } from '../common';

const Decider = ({ decider }) => (
  <View style={pageStyles.view}>
    <Header>Decider</Header>
    <List style={{ flex: 1 }}>
    {
      decider.decisions.map((item, index) => (
        <ListItem key={index} title={item.name} />
      ))
    }
    </List>
  </View>
);

Decider.propTypes = {
  decider: PropTypes.shape({
    decisions: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        options: PropTypes.arrayOf(PropTypes.string)
      })
    )
  })
};

const mapStateToProps = ({ decider }) => ({ decider });
const connected = connect(mapStateToProps)(Decider);

export { connected as Decider };
