import React, {ReactNode} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {LoggedOutTypeNavigation, NavigationProp} from '../../constants';
interface BackBtnProps {
  component: ReactNode;
}
const BackBtn = ({component}: BackBtnProps) => {
  const navigation =
    useNavigation<NavigationProp<LoggedOutTypeNavigation, string>>();

  const goBackHandle = () => {
    navigation.goBack();
  };
  return (
    <View>
      <TouchableOpacity onPress={goBackHandle}>{component}</TouchableOpacity>
    </View>
  );
};

export default BackBtn;
