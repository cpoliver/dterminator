import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import { connect } from 'react-redux';

import pageStyles from './pageStyles';
import { Header } from '../common';

const Decider = ({ decisions }) => (
  <View style={pageStyles.view}>
    <Header>Decider</Header>
    <List style={{ flex: 1 }}>
    {
      decisions.map((item, index) => (
        <ListItem key={index} title={item.name} />
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
  )
};

const mapStateToProps = ({ decisions }) => ({ decisions });
const connected = connect(mapStateToProps)(Decider);

export { connected as Decider };
