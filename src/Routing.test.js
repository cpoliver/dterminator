import { scenes } from './Routing';
import Main from './components/Main';
import { DecisionDetail } from './components/pages/DecisionDetail';

describe('the Routing config', () => {
  it('should contain the root scene', () => {
    expect(scenes.root).toEqual(
      expect.objectContaining({
        key: 'root',
        name: 'root',
        type: 'REACT_NATIVE_ROUTER_FLUX_PUSH',
        leftButtonIconStyle: {
          tintColor: '#25c7ee'
        },
        navigationBarStyle: {
          backgroundColor: '#201b21'
        },
        rightButtonIconStyle: {
          tintColor: '#25c7ee'
        },
        titleStyle: {
          color: '#25c7ee',
          fontSize: 20,
          fontWeight: 'bold',
        }
      })
    );
  });

  it('should contain the home scene', () => {
    expect(scenes.home).toEqual(
      expect.objectContaining({
        component: Main,
        key: 'home',
        name: 'home',
        type: 'REACT_NATIVE_ROUTER_FLUX_PUSH',
        hideNavBar: true
      })
    );
  });

  it('should contain the decision detail scene', () => {
    expect(scenes.decisionDetail).toEqual(
      expect.objectContaining({
        component: DecisionDetail,
        key: 'decisionDetail',
        name: 'decisionDetail',
        title: 'Decision Detail',
        type: 'REACT_NATIVE_ROUTER_FLUX_PUSH',
        hideNavBar: false,
      })
    );
  });
});
