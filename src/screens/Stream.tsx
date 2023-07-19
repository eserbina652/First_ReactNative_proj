import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {useRoute} from '@react-navigation/native';

const Stream = () => {
  const {params} = useRoute();
  return (
    <View>
      <Text>
        {/*@ts-ignore*/}
        Hello {params?.name || params?.email}
      </Text>
      <TouchableOpacity>
        <Text>Go to tab bar stack</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Stream;
