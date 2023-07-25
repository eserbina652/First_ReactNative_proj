import React from 'react';
import {Text, View} from 'react-native';
import SignUpBtn from '../buttons/signUp/SignUpBtn';
import {styles} from './styles';
import {useTranslation} from 'react-i18next';
const Register = () => {
  const {t} = useTranslation();
  return (
    <View style={styles.footer_container}>
      <Text>{t('dontHaveAnAccount')}</Text>
      <View style={styles.register_wrap}>
        <SignUpBtn text="Music Lover" />
        <SignUpBtn text="Artist" />
      </View>
    </View>
  );
};

export default Register;
