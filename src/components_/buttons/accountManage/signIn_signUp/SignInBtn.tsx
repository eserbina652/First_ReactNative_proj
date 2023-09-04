import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import {useTranslation} from 'react-i18next';
import {useNavigation} from '@react-navigation/native';
import {ScreensName} from '../../../../constants';

interface SignInBtnProps {
  handleSubmit: (parameters: any) => void;
  disabled: boolean;
  values: object;
}
const SignInBtn = ({handleSubmit, disabled, values}: SignInBtnProps) => {
  const navigation = useNavigation();
  const navigateToTabStack = () => {
    // @ts-ignore
    navigation.navigate(ScreensName.DRAWER_STACK);
  };
  const {t} = useTranslation();
  return (
    <TouchableOpacity
      onPress={() => {
        handleSubmit(values);
        navigateToTabStack();
      }}
      disabled={disabled}
      style={[styles.active_btn, disabled && styles.disabled_btn]}>
      <Text style={styles.login_btn_text}>{t('logIn')}</Text>
    </TouchableOpacity>
  );
};

export default SignInBtn;
