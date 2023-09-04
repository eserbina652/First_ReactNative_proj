import React from 'react';
import {Text, View} from 'react-native';
import RegisterAs from '../buttons/accountManage/signIn_signUp/RegisterAs';
import {styles} from './styles';
import {useTranslation} from 'react-i18next';
const Register = () => {
  const {t} = useTranslation();
  return (
    <View style={styles.footer_container}>
      <Text>{t('dontHaveAnAccount')}</Text>
      <View style={styles.register_wrap}>
        <RegisterAs text="Music Lover" />
        <RegisterAs text="Artist" />
      </View>
    </View>
  );
};

export default Register;
