import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
interface RegisterBtnProps {
  handleSubmit: () => void;
  disabled: boolean;
}
const RegisterBtn = ({handleSubmit, disabled}: RegisterBtnProps) => {
  return (
    <TouchableOpacity
      onPress={handleSubmit}
      disabled={disabled}
      style={[styles.logIn_btn, disabled && styles.register]}>
      <Text style={styles.login_btn_text}>Log In</Text>
    </TouchableOpacity>
  );
};

export default RegisterBtn;

const styles = StyleSheet.create({
  logIn_btn: {
    minWidth: '100%',
    backgroundColor: '#FF0090',
    borderRadius: 10,
    padding: 16,
    shadowColor: '#FF0090',
    shadowOpacity: 0.9,
    shadowOffset: {width: 10, height: 20},
    shadowRadius: 4,
    elevation: 4,
  },
  login_btn_text: {
    color: 'white',
    alignSelf: 'center',
  },
  register: {
    backgroundColor: 'rgba(255,0,144,0.29)',
  },
});
