import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Swiper from 'react-native-swiper';

class App extends Component {
  render() {
    return (
      <Swiper loop={false} showsPagination={false} index={1}>
        <View style={styles.view}>
        <Text>Left</Text>
        </View>
        <Swiper loop={false} showsPagination={false} index={1} horizontal={false}>
          <View style={styles.view}>
            <Text>Top</Text>
          </View>
          <View style={styles.view}>
            <Text>Home</Text>
          </View>
          <View style={styles.view}>
            <Text>Bottom</Text>
          </View>
        </Swiper>
        <View style={styles.view}>
          <Text>Right</Text>
        </View>
      </Swiper>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default App;
