import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Dimensions} from 'react-native';
import {DrawerTypeNavigation, ScreensName} from '../constants';
import DrawerContent from '../components_/DrawerContent';
import Profile from '../screens/Profile';
import Languages from '../screens/Languages';
import NavBar from '../components_/NavBar';
import tabBarNavigation from './TabBarNavigation';

const Drawer = createDrawerNavigator<DrawerTypeNavigation>();
const width = Dimensions.get('window').width;
const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      drawerContent={() => <DrawerContent />}
      initialRouteName={ScreensName.TAB_BAR_STACK}
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
        options={{
          headerShown: false,
        }}
        component={tabBarNavigation}
      />
      <Drawer.Screen
        name={ScreensName.PROFILE}
        options={{
          header: () => (
            <NavBar
              title={'MY PROFILE'}
              burgerMenu={false}
              withIcon={true}
              filterMenu={true}
            />
          ),
          headerShown: true,
        }}
        component={Profile}
      />
      <Drawer.Screen
        name={ScreensName.LANGUAGE}
        options={{
          header: () => (
            <NavBar
              title={'MY LANGUAGES'}
              burgerMenu={false}
              withIcon={true}
              filterMenu={true}
            />
          ),
          headerShown: true,
        }}
        component={Languages}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
