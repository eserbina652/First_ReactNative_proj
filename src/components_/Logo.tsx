import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import fonts from '../assets/fonts';

const Logo = () => {
  return (
    <View style={styles.logo_wrap}>
      <Text style={styles.logo}>Shcherbina's ReactNative project</Text>
    </View>
  );
};

export default Logo;

const styles = StyleSheet.create({
  logo_wrap: {
    margin: 25,
    marginBottom: 15,
    alignSelf: 'center',
  },
  logo: {
    fontSize: 20,
    fontFamily: fonts.CaprasimoRegular,
    color: 'deeppink',
    letterSpacing: 2,
    textAlign: 'center',
  },
});
