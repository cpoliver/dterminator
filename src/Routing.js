import { StackNavigator } from 'react-navigation';

import { Main } from './components/Main';
import { DecisionDetail } from './components/screens';
import { colors } from './styles';

const mainRoute = 'main';

const Router = StackNavigator({
  [mainRoute]: {
    screen: Main,
    navigationOptions: {
      header: null
    }
  },
  decisionDetail: {
    screen: DecisionDetail,
    navigationOptions: {
      title: 'Decision Detail',
      headerTintColor: colors.main,
      headerStyle: {
        backgroundColor: colors.background
      },
      headerTitleStyle: {
        fontSize: 20,
        fontWeight: 'bold'
      }
    }
  }
}, {
  initialRouteName: mainRoute
});

export default Router;
