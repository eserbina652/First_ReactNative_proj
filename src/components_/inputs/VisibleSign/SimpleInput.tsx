import React from 'react';
import {Text, TextInput, View, ViewStyle} from 'react-native';
import {styles} from '../styles';

interface SimpleInputProps {
  placeholder: string;
  inputStyles?: ViewStyle;
}
const SimpleInput = ({placeholder, inputStyles}: SimpleInputProps) => {
  const inputErr = '';
  return (
    <View>
      <TextInput
        placeholder={placeholder}
        style={[styles.loginInput, styles.inputs, inputStyles]}
      />
      {inputErr && <Text>{inputErr}</Text>}
    </View>
  );
};

export default SimpleInput;
