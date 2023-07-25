import React, {ReactNode} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {
  LoggedOutTypeNavigation,
  NavigationProp,
  ScreensName,
} from '../../constants';
interface BackBtnProps {
  component: ReactNode;
}
const BackBtn = ({component}: BackBtnProps) => {
  const navigation =
    useNavigation<NavigationProp<LoggedOutTypeNavigation, string>>();

  const redirect = () => {
    navigation.navigate(ScreensName.SIGN_IN);
  };
  return (
    <View>
      <TouchableOpacity onPress={redirect}>{component}</TouchableOpacity>
    </View>
  );
};

export default BackBtn;
