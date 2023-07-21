import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Dimensions} from 'react-native';
import {ScreensName} from '../constants';
import TabBarNavigation from './TabBarNavigation';
import DrawerContent from '../components_/DrawerContent';

const Drawer = createDrawerNavigator();
const width = Dimensions.get('window').width;
const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      drawerContent={() => <DrawerContent />}
      initialRouteName={ScreensName.TAB_BAR_STACK}
      screenOptions={{
        headerShown: false,
        drawerPosition: 'right',
        swipeEdgeWidth: 100,
        drawerStyle: {
          width: width * 0.7,
          backgroundColor: 'white',
        },
      }}>
      <Drawer.Screen
        name={ScreensName.TAB_BAR_STACK}
        options={{headerShown: false}}
        component={TabBarNavigation}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
