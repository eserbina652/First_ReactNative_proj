import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import fonts from '../../assets/fonts';
import {useTranslation} from 'react-i18next';

const ForgotPassBtn = () => {
  const {t} = useTranslation();
  return (
    <TouchableOpacity style={styles.forgotPass_btn}>
      <Text style={styles.forgotPass}>{t('forgotPass')}?</Text>
    </TouchableOpacity>
  );
};

export default ForgotPassBtn;

const styles = StyleSheet.create({
  forgotPass: {
    fontFamily: fonts.ComfortaaVariableFontWght,
    color: 'rgba(0,0,0,0.25)',
    alignSelf: 'flex-end',
  },
  forgotPass_btn: {
    minWidth: '100%',
    paddingTop: 15,
    paddingBottom: 25,
  },
});
