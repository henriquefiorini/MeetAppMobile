import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import {
  SignIn,
  SignUp,
  ForgotPassword,
  ResetPassword,
  Dashboard,
  Profile,
} from '~/pages';

export default (isAuthenticated = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Auth: createSwitchNavigator({
          SignIn,
          SignUp,
          ForgotPassword,
          ResetPassword,
        }),
        App: createBottomTabNavigator({
          Dashboard,
          Profile,
        }),
      },
      {
        initialRouteName: isAuthenticated ? 'App' : 'Auth',
      },
    ),
  );
