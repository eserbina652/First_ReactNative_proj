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
import './i18.config';
import 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native';
import Navigation from './src/navigation';

// Todo: повинно листатися до низу
// Todo: Передавати данні при реєстрації до профілю,

// Todo: прибрати все що не працює,
// Todo: Рефакторинг (перенести стилі та розбити все по компонентах)
// Todo: лог аут. Перевіріти!

// Todo: Best practice

//ПИТАННЯ: як зробити кнопку фіксованою,
// як переносити строки,
// як зробити шадоу,
// Додавання фото (Ліба)
// Навігація
// змінювати мову тільки після кліку на кнопку ок
const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Navigation />
    </SafeAreaView>
  );
};
export default App;
