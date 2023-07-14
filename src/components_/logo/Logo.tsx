import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';

const Logo = () => {
  return (
    <View style={styles.logo_wrap}>
      <Text style={styles.logo}>Shcherbina's ReactNative project</Text>
    </View>
  );
};

export default Logo;
