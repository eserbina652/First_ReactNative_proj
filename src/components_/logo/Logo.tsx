import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';
import {useTranslation} from 'react-i18next';

const Logo = () => {
  const {t} = useTranslation();
  return (
    <View style={styles.logo_wrap}>
      <Text style={styles.logo}>{t('logo')}</Text>
    </View>
  );
};

export default Logo;
