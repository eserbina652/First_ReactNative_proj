import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {LoggedInTypeNavigation, ScreensName} from '../constants';
import DrawerNavigation from './DrawerNavigation';

const LoggedInStack = createNativeStackNavigator<LoggedInTypeNavigation>();

export default () => {
  return (
    <LoggedInStack.Navigator initialRouteName={ScreensName.DRAWER_STACK}>
      <LoggedInStack.Screen
        name={ScreensName.DRAWER_STACK}
        component={DrawerNavigation}
        options={{headerShown: false}}
      />
    </LoggedInStack.Navigator>
  );
};
