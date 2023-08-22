import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {LoggedInTypeNavigation, ScreensName} from '../constants';
import DrawerNavigation from './DrawerNavigation';
import tabBarNavigation from './TabBarNavigation';

const LoggedInStack = createNativeStackNavigator<LoggedInTypeNavigation>();

export default () => {
  return (
    <LoggedInStack.Navigator initialRouteName={ScreensName.TAB_BAR_STACK}>
      <LoggedInStack.Screen
        name={ScreensName.TAB_BAR_STACK}
        component={tabBarNavigation}
        options={{headerShown: false}}
      />
      <LoggedInStack.Screen
        name={ScreensName.DRAWER_STACK}
        component={DrawerNavigation}
        options={{headerShown: false}}
      />
    </LoggedInStack.Navigator>
  );
};
