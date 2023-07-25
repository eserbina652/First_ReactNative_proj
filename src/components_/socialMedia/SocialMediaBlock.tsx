import React from 'react';
import {View} from 'react-native';
import SocialMediaBtn from '../buttons/socialMedia/SocialMediaBtn';
import {AppleSVG, FacebookSVG, GoogleSVG} from '../../assets/image';
import {styles} from './styles';
import {useTranslation} from 'react-i18next';

const SocialMediaBlock = () => {
  const {t} = useTranslation();
  const additionalText = t('signInWith');
  return (
    <View style={styles.socialMedia_block}>
      <View style={styles.socialMedia_row}>
        <SocialMediaBtn
          buttonType="facebook_btn"
          source={<FacebookSVG />}
          text="Facebook"
        />
        <SocialMediaBtn
          buttonType="google_btn"
          source={<GoogleSVG />}
          text="Google"
          imgStyle={styles.apple_additional_style}
        />
      </View>
      <SocialMediaBtn
        buttonType="apple_btn"
        source={<AppleSVG />}
        text={`${additionalText} Apple`}
      />
    </View>
  );
};

export default SocialMediaBlock;
