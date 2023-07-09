import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import PasswordVisible from '../../assets/image/PasswordVisible';

const PasswordVisibleBtn = () => {
  return (
    <TouchableOpacity style={styles.passwordVisibleImg}>
      <PasswordVisible />
    </TouchableOpacity>
  );
};

export default PasswordVisibleBtn;

const styles = StyleSheet.create({
  passwordVisibleImg: {
    right: 40,
  },
});
