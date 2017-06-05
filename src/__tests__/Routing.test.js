import 'react-native';
import { StackNavigator } from 'react-navigation';

import Router from '../Routing'; // eslint-disable-line no-unused-vars
import { Main } from '../components/Main';
import { DecisionDetail } from '../components/screens';

jest.mock('react-navigation', () => ({
  StackNavigator: jest.fn()
}));

describe('the Routing config', () => {
  it('should contain the correct items', () => {
    expect(StackNavigator).toHaveBeenCalledWith({
      decisionDetail: {
        navigationOptions: {
          headerStyle: {
            backgroundColor: '#201b21'
          },
          headerTintColor: '#25c7ee',
          headerTitleStyle: {
            fontSize: 20,
            fontWeight: 'bold'
          },
          title: 'Decision Detail'
        },
        screen: DecisionDetail
      },
      main: {
        navigationOptions: {
          header: null
        },
        screen: Main
      }
    }, {
      initialRouteName: 'main'
    });
  });
});
