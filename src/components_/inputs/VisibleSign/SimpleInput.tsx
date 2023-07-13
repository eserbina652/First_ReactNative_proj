import React from 'react';
import {Text, TextInput, View, ViewStyle} from 'react-native';
import {styles} from '../styles';

interface SimpleInputProps {
  placeholder: string;
  inputStyles?: ViewStyle;
  onChange?: (text: string) => void;
  value?: string;
  error?: boolean | string;
  onFocus?: () => void;
}
const SimpleInput = ({
  placeholder,
  inputStyles,
  onChange,
  value,
  error,
  onFocus,
}: SimpleInputProps) => {
  return (
    <View>
      <TextInput
        onFocus={onFocus}
        onChangeText={onChange}
        value={value}
        placeholder={placeholder}
        style={[styles.loginInput, styles.inputs, inputStyles]}
      />
      {error && <Text style={styles.inputErr}>{error}</Text>}
    </View>
  );
};

export default SimpleInput;
