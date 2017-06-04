import rn from 'react-native';
import React from 'react';
import { SocialIcon } from 'react-native-elements';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import { Home, openSocialUrl } from './Home';

const render = () => shallow(
  <Home />
);

describe('the Home component', () => {
  beforeEach(rn.Linking.openURL.mockReset);

  it('should match the snapshot', () => {
    const component = render();

    expect(toJson(component)).toMatchSnapshot();
  });

  describe('pressing the github icon', () => {
    it('should open the github url', () => {
      const icon = render().find(SocialIcon).at(0);
      icon.simulate('press');

      expect(rn.Linking.openURL).toHaveBeenCalledWith('https://github.com/cpoliver');
    });
  });

  describe('pressing the linkedin icon', () => {
    it('should open the linkedin url', () => {
      const icon = render().find(SocialIcon).at(1);
      icon.simulate('press');

      expect(rn.Linking.openURL).toHaveBeenCalledWith('https://linkedin.com/in/cpoliver');
    });
  });

  describe('pressing the twitter icon', () => {
    it('should open the twitter url', () => {
      const icon = render().find(SocialIcon).at(2);
      icon.simulate('press');

      expect(rn.Linking.openURL).toHaveBeenCalledWith('https://twitter.com/cpoliver');
    });
  });
});

describe('the openSocialUrl function', () => {
  beforeEach(rn.Linking.openURL.mockReset);

  describe('when called with "github"', () => {
    it('should open the github url', () => {
      openSocialUrl('github');

      expect(rn.Linking.openURL).toHaveBeenCalledWith('https://github.com/cpoliver');
    });
  });

  describe('when called with "linkedin"', () => {
    it('should open the linkedin url', () => {
      openSocialUrl('linkedin');

      expect(rn.Linking.openURL).toHaveBeenCalledWith('https://linkedin.com/in/cpoliver');
    });
  });

  describe('when called with "twitter"', () => {
    it('should open the twitter url', () => {
      openSocialUrl('twitter');

      expect(rn.Linking.openURL).toHaveBeenCalledWith('https://twitter.com/cpoliver');
    });
  });

  describe('when called with an invalid argument', () => {
    it('should throw an error', () => {
      const callWithInvalid = () => openSocialUrl('argument');

      expect(callWithInvalid).toThrow();
      expect(rn.Linking.openURL).not.toHaveBeenCalled();
    });
  });
});
