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

// Todo: Не зберігати данні в профілі, поки юзер не натисне save
// Todo: Якщо юзер залогінен навігувати одразу на апку,
// якщо ні - на логін, якшо логін невірний - пропонувати зареєструватися
// Todo: Додавання/зміна/видалення(по бажанню) фото
// Todo: Best practice
// Навігація розібратися вже нарешті
// передавати джейнерик з типом навігації як пропс (це не є потрібним, якщо юзати бест практікс)
// зробити іконку додатку
// зробити екран попереднього завантаження

/* в мене є безліч юзерів, при реєстрації, я повинна додавати їх данні
до загального массиву, щоб мати змогу перевірити чи зареєстрований юзер,
та відобразити потрібні данні до юзера який зайшов у систему,
відфільтрувавши початковий массив, по наприклад паролю, тому що айді в нас нема,
а пароль скоріш за все унікальний. в теорії я розумію що робити, але на практиці не дуже
*/
const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Navigation />
    </SafeAreaView>
  );
};
export default App;
