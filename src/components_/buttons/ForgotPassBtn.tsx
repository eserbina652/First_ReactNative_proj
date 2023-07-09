import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import fonts from '../../assets/fonts/index.js';

const ForgotPassBtn = () => {
  return (
    <TouchableOpacity style={styles.forgotPass_btn}>
      <Text style={styles.forgotPass}>Forgot password?</Text>
    </TouchableOpacity>
  );
};

export default ForgotPassBtn;

const styles = StyleSheet.create({
  forgotPass: {
    fontFamily: fonts.TheGirlNextDoorRegular,
    color: 'rgba(0,0,0,0.25)',
    alignSelf: 'flex-end',
  },
  forgotPass_btn: {
    minWidth: '100%',
    paddingTop: 15,
    paddingBottom: 25,
  },
});
