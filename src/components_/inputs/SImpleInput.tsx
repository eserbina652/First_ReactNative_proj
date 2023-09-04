import React, {useState} from 'react';
import {Text, TextInput, TouchableOpacity, View, ViewStyle} from 'react-native';
import {styles} from './styles';
import SignVisibleBtn from '../buttons/SignVisibleBtn';
import {useTranslation} from 'react-i18next';
import i18n from '../../../i18.config';

interface SimpleInputProps {
  placeholder: string;
  inputStyles?: ViewStyle;
  onChange?: (text: string) => void;
  value?: string;
  error?: string | undefined;
  onFocus?: () => void;
  security?: boolean;
}
const SImpleInput = ({
  placeholder,
  inputStyles,
  onChange,
  value,
  error,
  onFocus,
  security = false,
}: SimpleInputProps) => {
  const {t} = useTranslation(['main', 'sub']);
  const [visible, setVisible] = useState(true);
  const placeholderVal = t(`${placeholder}`, {ns: 'main'});
  console.log('VAL', value); //Як оптимізувати інпути, чи все окей?
  return (
    <View>
      <View style={security && styles.specialInput_container}>
        <TextInput
          onFocus={onFocus}
          onChangeText={onChange}
          value={value}
          placeholder={placeholderVal}
          style={
            security
              ? [styles.specialInput, styles.inputs, inputStyles]
              : [styles.loginInput, styles.inputs, inputStyles]
          }
          secureTextEntry={security && visible}
        />
        {security && (
          <TouchableOpacity
            onPress={() => setVisible(!visible)}
            style={styles.passwordVisibleImg}>
            <SignVisibleBtn signVisible={visible} />
          </TouchableOpacity>
        )}
      </View>
      {error && (
        <Text style={styles.inputErr}>{i18n.t(error, {ns: 'sub'})}</Text>
      )}
    </View>
  );
};

export default SImpleInput;