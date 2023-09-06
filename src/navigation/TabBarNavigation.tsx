import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ScreensName, TabTypeNavigation} from '../constants';
import NavBar from '../components_/NavBar';
import Forecast from '../screens/Forecast';
import Finance from '../screens/Finance';
import Favourites from '../screens/Favourites';
import tabBarOptions from './options';
import React from 'react';
import Profile from '../screens/Profile';
import Languages from '../screens/Languages';

const Tab = createBottomTabNavigator<TabTypeNavigation>();
export default () => {
  return (
    <Tab.Navigator
      initialRouteName={ScreensName.FORECAST}
      screenOptions={({route}) => ({
        ...tabBarOptions(route),
        orientation: 'portrait',
        // headerShown: false,
        animation: 'fade',
        // @ts-ignore
        // header: null,
      })}>
      <Tab.Screen
        name={ScreensName.FORECAST}
        options={{
          header: () => (
            <NavBar title={'forecast'} burgerMenu={true} filterMenu={true} />
          ),
          headerShown: true,
        }}
        component={Forecast}
      />
      <Tab.Screen
        name={ScreensName.FINANCE}
        options={{
          header: () => (
            <NavBar title={'finance'} burgerMenu={true} filterMenu={true} />
          ),
          headerShown: true,
        }}
        component={Finance}
      />
      <Tab.Screen
        name={ScreensName.FAVOURITES}
        options={{
          header: () => (
            <NavBar title={'favourites'} burgerMenu={true} filterMenu={true} />
          ),
          headerShown: true,
        }}
        component={Favourites}
      />
      <Tab.Screen
        name={ScreensName.PROFILE}
        options={{
          header: () => (
            <NavBar
              title={'profile'}
              burgerMenu={false}
              withIcon={true}
              filterMenu={true}
            />
          ),
          headerShown: true,
          tabBarButton: () => null,
        }}
        component={Profile}
      />
      <Tab.Screen
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
          tabBarButton: () => null,
        }}
        component={Languages}
      />
    </Tab.Navigator>
  );
};
