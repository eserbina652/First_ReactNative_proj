import React, {useState} from 'react';
import {Text, TextInput, TouchableOpacity, View, ViewStyle} from 'react-native';
import SignVisibleBtn from '../../buttons/SignVisibleBtn';
import {styles} from '../styles';

interface SpecialInputProps {
  placeholder: string;
  inputStyle?: ViewStyle;
  onChange?: (text: string) => void;
  value?: string;
  error?: boolean | string;
  onFocus?: () => void;
}
const SpecialInput = ({
  inputStyle,
  placeholder,
  onChange,
  value,
  error,
  onFocus,
}: SpecialInputProps) => {
  const [visible, setVisible] = useState(true);

  return (
    <View>
      <View style={styles.specialInput_container}>
        <TextInput
          onFocus={onFocus}
          onChangeText={onChange}
          value={value}
          secureTextEntry={visible}
          placeholder={placeholder}
          style={[styles.specialInput, styles.inputs, inputStyle]}
        />
        <TouchableOpacity
          onPress={() => setVisible(!visible)}
          style={styles.passwordVisibleImg}>
          <SignVisibleBtn signVisible={visible} />
        </TouchableOpacity>
      </View>
      {error && <Text style={styles.inputErr}>{error}</Text>}
    </View>
  );
};

export default SpecialInput;
