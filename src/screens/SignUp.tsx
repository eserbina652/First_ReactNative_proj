import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import Logo from '../components_/logo/Logo';
import SocialMediaBlock from '../components_/socialMedia/SocialMediaBlock';
import Registration from '../components_/registration/Registration';
import {styles} from './styles';
import {useTranslation} from 'react-i18next';
import {useRoute} from '@react-navigation/native';
import ChangeLangBtn from '../components_/buttons/ChangeLangBtn';

const SignUp = () => {
  const {params} = useRoute();
  const {t} = useTranslation();
  // @ts-ignore
  const text: string = params?.registerAs;
  let upgradeText: string;
  const checkVowelConsonant = (templateText: string) => {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const firstLetter = templateText[0].toLowerCase();
    const result = vowels.includes(firstLetter) ? 'an' : 'a';
    upgradeText = `${t(result)} ${templateText}`;
    return upgradeText;
  };

  if (text) {
    checkVowelConsonant(text);
  }

  return (
    <ScrollView style={styles.app_container}>
      <ChangeLangBtn />
      <Logo />
      <View style={styles.under_logo_text}>
        <Text>
          {/*@ts-ignore*/}
          {t('registerAs')} {upgradeText}
        </Text>
        <Text>{t('registerWith')}</Text>
      </View>
      <SocialMediaBlock />
      <Registration />
    </ScrollView>
  );
};

export default SignUp;
