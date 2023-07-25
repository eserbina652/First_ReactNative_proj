import React, {useState} from 'react';
import {TextInput} from 'react-native';
import {useTranslation} from 'react-i18next';

interface SimpleInputProps {
  placeholder: string;
}
const SimpleInput = ({placeholder}: SimpleInputProps) => {
  const {t} = useTranslation();
  const [value, setValue] = useState('');
  const translatedPlaceholder = t(placeholder) || placeholder;
  return (
    <TextInput
      placeholder={translatedPlaceholder}
      value={value}
      onChangeText={text => setValue(text)}
    />
  );
};

export default SimpleInput;
