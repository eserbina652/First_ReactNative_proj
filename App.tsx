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
// import SignIn from './src/screens/SignIn';
import SignUp from './src/screens/SignUp';
import './i18.config';

//Todo:як змінити мову помилок, як зробити кнопку фіксованою, як язати локалстораж, як переносити строки

const App = () => {
  return (
    <>
      {/*<SignIn />*/}
      <SignUp />
    </>
  );
};

export default App;
