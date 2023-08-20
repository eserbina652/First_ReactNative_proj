import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import Logo from '../components_/logo/Logo';
import Registration from '../components_/registration/Registration';
import {styles} from './styles';
import {useTranslation} from 'react-i18next';
import {RouteProp, useRoute} from '@react-navigation/native';
import ChangeLangBtn from '../components_/buttons/ChangeLangBtn';

type RootStackParamList = {
  SignUp: {registerAs: string};
};

type SignUpRouteProp = RouteProp<RootStackParamList, 'SignUp'>;
const SignUp = () => {
  const {params} = useRoute<SignUpRouteProp>();
  const {t} = useTranslation();
  const text: string = params?.registerAs;
  let upgradeText: string = '';
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
          {t('registerAs')} {upgradeText}
        </Text>
      </View>
      <Registration />
    </ScrollView>
  );
};

export default SignUp;
