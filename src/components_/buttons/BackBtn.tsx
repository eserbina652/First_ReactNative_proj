import React, {ReactNode} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
interface BackBtnProps {
  component: ReactNode;
}
const BackBtn = ({component}: BackBtnProps) => {
  const navigation = useNavigation();

  const redirect = () => {
    // @ts-ignore
    navigation.navigate('SignIn');
  };
  return (
    <View>
      <TouchableOpacity onPress={redirect}>{component}</TouchableOpacity>
    </View>
  );
};

export default BackBtn;
