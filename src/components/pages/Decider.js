import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import { connect } from 'react-redux';

import pageStyles from './pageStyles';
import { Header } from '../common';

class DeciderPage extends Component {
	renderItems() {
		return this.props.decider.decisions.map((item, index) => (
      <ListItem key={index} title={item.name} />
		));
	}

  render() {
    return (
      <View style={pageStyles.view}>
        <Header>Decider</Header>
				<List style={{ flex: 1 }}>
					{this.renderItems()}
				</List>
			</View>
    );
  }
}

DeciderPage.propTypes = {
  decider: {
    decisions: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        options: PropTypes.arrayOf(PropTypes.string)
      })
    )
  }
};

const mapStateToProps = ({ decider }) => ({ decider });

const Decider = connect(mapStateToProps)(DeciderPage);
export { Decider };
