import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import Logo from '../components_/logo/Logo';
import SocialMediaBlock from '../components_/socialMedia/SocialMediaBlock';
import Registration from '../components_/registration/Registration';
import {styles} from './styles';
import {useTranslation} from 'react-i18next';
import ChangeLangBtn from '../components_/buttons/ChangeLangBtn';

interface SignUpProps {
  registerText?: string;
}
const SignUp = ({registerText = 'Music Lovers'}: SignUpProps) => {
  const {t} = useTranslation();
  return (
    <ScrollView style={styles.app_container}>
      <ChangeLangBtn />
      <Logo />
      <View style={styles.under_logo_text}>
        <Text>
          {t('registration')} {registerText}
        </Text>
        <Text>{t('registerWith')}</Text>
      </View>
      <SocialMediaBlock />
      <Registration />
    </ScrollView>
  );
};

export default SignUp;
