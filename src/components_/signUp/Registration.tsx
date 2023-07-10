import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import SignUpBtn from '../buttons/SignUpBtn';
const Registration = () => {
  return (
    <View style={styles.footer_container}>
      <Text>Don’t have an account?</Text>
      <View style={styles.register_wrap}>
        <SignUpBtn text="Music Lover" />
        <SignUpBtn text="Artist" />
      </View>
    </View>
  );
};

export default Registration;

const styles = StyleSheet.create({
  footer_container: {
    borderTopWidth: 1,
    borderTopColor: 'rgba(0,0,0,0.12)',
    flex: 0.5,
    gap: 24,
    width: '100%',
    alignItems: 'center',
    paddingTop: 25,
  },
  register_wrap: {
    alignSelf: 'center',
    width: '80%',
    gap: 15,
  },
});
