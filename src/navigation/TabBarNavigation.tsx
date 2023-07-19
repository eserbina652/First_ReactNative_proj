import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ScreensName} from '../constants';
import NavBar from '../components_/NavBar';
import Forecast from '../screens/Forecast';
import Finance from '../screens/Finance';
import Favourites from '../screens/Favourites';
import tabBarOptions from './options';

const Tab = createBottomTabNavigator();
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
            <NavBar title={'Forecast'} burgerMenu={true} filterMenu={true} />
          ),
          headerShown: true,
        }}
        component={Forecast}
      />
      <Tab.Screen
        name={ScreensName.FINANCE}
        options={{
          header: () => (
            <NavBar title={'Finance'} burgerMenu={true} filterMenu={true} />
          ),
          headerShown: true,
        }}
        component={Finance}
      />
      <Tab.Screen
        name={ScreensName.FAVOURITES}
        options={{
          header: () => (
            <NavBar title={'Favourites'} burgerMenu={true} filterMenu={true} />
          ),
          headerShown: true,
        }}
        component={Favourites}
      />
    </Tab.Navigator>
  );
};
