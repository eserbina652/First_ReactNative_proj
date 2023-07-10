import React from 'react';
import {StyleSheet, View} from 'react-native';
import SocialMediaBtn from './buttons/SocialMediaBtn';
import Facebook from '../assets/image/Facebook';
import Google from '../assets/image/Google';
import Apple from '../assets/image/Apple';

const SocialMediaBlock = () => {
  return (
    <View style={styles.socialMedia_block}>
      <View style={styles.socialMedia_row}>
        <SocialMediaBtn
          buttonType="facebook_btn"
          source={<Facebook />}
          text="Facebook"
        />
        <SocialMediaBtn
          buttonType="google_btn"
          source={<Google />}
          text="Google"
          imgStyle={styles.apple_additional_style}
        />
      </View>
      <SocialMediaBtn
        buttonType="apple_btn"
        source={<Apple />}
        text="Sign in with Apple"
      />
    </View>
  );
};

export default SocialMediaBlock;

const styles = StyleSheet.create({
  socialMedia_block: {
    gap: 16,
    marginBottom: 25,
  },
  socialMedia_row: {
    flexDirection: 'row',
    minWidth: '100%',
    gap: 16,
  },
  apple_additional_style: {
    width: 17,
    height: 20,
  },
});
