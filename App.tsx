// import React from 'react';
// import {createNativeStackNavigator} from 'react-native-screens/native-stack';
// import {NavigationContainer} from '@react-navigation/native';
// import Worklets from './src/screens/Worklets';
// import GuesterHendler from './src/screens/GuesterHendler';
// import Home from './src/screens/Home';
// import Transition from './src/screens/Transition';
// import HightOrderAnimation from './src/screens/HightOrderAnimation';
// import {GestureHandlerRootView} from 'react-native-gesture-handler';
// import FirstTry from './src/screens/FirstTry';
// import {SafeAreaView} from 'react-native';
// import SVGAnimation from './src/screens/SVGAnimation';
//
// const Stack = createNativeStackNavigator();
//
// function App() {
//   return (
//     <SafeAreaView style={{flex: 1}}>
//       <GestureHandlerRootView style={{flex: 1}}>
//         <NavigationContainer>
//           <Stack.Navigator initialRouteName={'Home'}>
//             <Stack.Screen name="Worklets" component={Worklets} />
//             <Stack.Screen name="Home" component={Home} />
//             <Stack.Screen name="GuesterHendler" component={GuesterHendler} />
//             <Stack.Screen name="Transition" component={Transition} />
//             <Stack.Screen name="HIghtOrder" component={HightOrderAnimation} />
//             <Stack.Screen name="FirstTry" component={FirstTry} />
//             <Stack.Screen name="SVG" component={SVGAnimation} />
//           </Stack.Navigator>
//         </NavigationContainer>
//       </GestureHandlerRootView>
//     </SafeAreaView>
//   );
// }
// export default App;
//
import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import LeftArrow from './src/assets/image/LeftArrow';
import LogIn from './src/components_/signIn/LogIn';
import SignUp from './src/components_/signUp/SignUp';
import BackBtn from './src/components_/buttons/BackBtn';
const App = () => {
  //Todo: all png to svg!
  return (
    <ScrollView style={styles.app_container}>
      <BackBtn component={<LeftArrow />} />
      <LogIn />
      <SignUp />
    </ScrollView>
  );
};

export default App;

const styles = StyleSheet.create({
  app_container: {
    flex: 1,
    padding: 30,
    backgroundColor: '#FFF0F9',
    // paddingBottom: 350,
  },
});
