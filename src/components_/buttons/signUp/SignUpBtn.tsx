import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import {InfoSVG} from '../../../assets/image';
import {useTranslation} from 'react-i18next';
import {useNavigation} from '@react-navigation/native';

interface SignUpProps {
  text: string;
}
const SignUpBtn = ({text}: SignUpProps) => {
  const {t} = useTranslation();
  const navigation = useNavigation();

  const redirect = () => {
    // @ts-ignore
    navigation.navigate('SignUp', {registerAs: text});
  };
  return (
    <TouchableOpacity onPress={redirect} style={styles.register_btn}>
      <Text style={styles.register_btn_text}>
        {/*@ts-ignore*/}
        {t('registerAs')} {text}
      </Text>
      <TouchableOpacity style={styles.register_img}>
        <InfoSVG />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default SignUpBtn;
