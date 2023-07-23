import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';
import {
  NavigationProp,
  ScreensName,
  TabTypeNavigation,
} from '../../../constants';
interface RegisterBtnProps {
  handleSubmit: () => void;
  disabled: boolean;
}
const RegisterBtn = ({handleSubmit, disabled}: RegisterBtnProps) => {
  const navigation = useNavigation<NavigationProp<TabTypeNavigation, string>>();
  const navigateToTabStack = () => {
    // @ts-ignore
    navigation.navigate(ScreensName.TAB_BAR_STACK);
  };
  return (
    <TouchableOpacity
      onPress={() => {
        handleSubmit();
        navigateToTabStack();
      }}
      disabled={disabled}
      style={[styles.active_btn, disabled && styles.disabled_btn]}>
      <Text style={styles.login_btn_text}>Log In</Text>
    </TouchableOpacity>
  );
};

export default RegisterBtn;
