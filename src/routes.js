import React from 'react';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import Header from 'components/Header';

import Welcome from 'screens/welcome';
import Repositories from 'screens/repositories';
import Organizations from 'screens/organizations';

import { colors } from 'theme';

const createRootNavigator = (userExists = false) => createStackNavigator({
  Welcome: {
    screen: Welcome,
  },
  User: createBottomTabNavigator({
    Repositories,
    Organizations,
  }, {
    tabBarPosition: 'bottom',
    tabBarOptions: {
      showLabel: false,
      activeTintColor: colors.white,
      inactiveTintColor: colors.inactive,
      style: {
        backgroundColor: colors.primary,
      },
    },
  }),
}, {
  initialRouteName: userExists ? 'User' : 'Welcome',
  navigationOptions: {
    header: props => <Header {...props} />,
  },
});

export default createRootNavigator;
