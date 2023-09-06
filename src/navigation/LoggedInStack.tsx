import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {LoggedInTypeNavigation, ScreensName} from '../constants';
import DrawerNavigation from './DrawerNavigation';

const LoggedInStack = createNativeStackNavigator<LoggedInTypeNavigation>();
//, tabBarButton: () => null
export default () => {
  // const navigation = useNavigation();
  // const route = useRoute<RouteProp<{params: {email: string}}>>();
  // useEffect(() => {
  //   if (route?.params?.email) {
  //     // @ts-ignore
  //     navigation.navigate(ScreensName.DRAWER_STACK, {
  //       email: route.params.email,
  //     });
  //   }
  // }, []);
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
