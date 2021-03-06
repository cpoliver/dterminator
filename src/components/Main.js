import React from 'react';
import PropTypes from 'prop-types';
import Swiper from 'react-native-swiper';

import { DecisionList, Home, Profile, Randomizer, Settings } from './screens';

const Main = ({ navigation }) => (
  <Swiper loop={false} showsPagination={false} index={1}>
    <Randomizer />
    <Swiper loop={false} showsPagination={false} index={1} horizontal={false}>
      <Profile />
      <Home />
      <Settings />
    </Swiper>
    <DecisionList navigation={navigation} />
  </Swiper>
);

Main.propTypes = {
  navigation: PropTypes.object.isRequired
};

export { Main };
