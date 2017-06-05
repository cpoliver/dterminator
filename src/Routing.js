import { StackNavigator } from 'react-navigation';

import { Main } from './components/Main';
import { DecisionDetail } from './components/screens';

const Router = StackNavigator({
  main: { screen: Main },
  decisionDetail: { screen: DecisionDetail }
}, {
  initialRouteName: 'main'
});

export default Router;
