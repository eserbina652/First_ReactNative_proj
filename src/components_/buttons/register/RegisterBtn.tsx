import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';
interface RegisterBtnProps {
  handleSubmit: () => void;
  disabled: boolean;
}
const RegisterBtn = ({handleSubmit, disabled}: RegisterBtnProps) => {
  return (
    <TouchableOpacity
      onPress={handleSubmit}
      disabled={disabled}
      style={[styles.active_btn, disabled && styles.disabled_btn]}>
      <Text style={styles.login_btn_text}>Log In</Text>
    </TouchableOpacity>
  );
};

export default RegisterBtn;
