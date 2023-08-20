import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Dimensions} from 'react-native';
import {DrawerTypeNavigation, ScreensName} from '../constants';
import DrawerContent from '../components_/DrawerContent';
import TabBarNavigation from './TabBarNavigation';

const Drawer = createDrawerNavigator<DrawerTypeNavigation>();
const width = Dimensions.get('window').width;
const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      drawerContent={() => <DrawerContent />}
      initialRouteName={ScreensName.DRAWER_STACK}
      screenOptions={{
        headerShown: false,
        drawerPosition: 'left',
        swipeEdgeWidth: 300,
        swipeEnabled: true,
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
