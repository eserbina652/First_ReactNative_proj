import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {ScreensName} from '../constants';
import {RootStackParamList} from '../utils/types';

type StreamScreenRouteProp = RouteProp<RootStackParamList, 'Stream'>;
const Stream = () => {
  const {params} = useRoute<StreamScreenRouteProp>();
  const navigation = useNavigation();
  const navigateToDrawerStack = () => {
    // @ts-ignore
    navigation.navigate(ScreensName.DRAWER_STACK);
  };
  return (
    <View>
      <Text>Hello {params?.name || params?.email}</Text>
      <TouchableOpacity onPress={navigateToDrawerStack}>
        <Text>Go to drawer stack</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Stream;
