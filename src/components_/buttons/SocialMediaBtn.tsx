import React, {ReactNode} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';

interface SocialMediaBtnProps {
  buttonType: 'facebook_btn' | 'google_btn' | 'apple_btn';
  imgStyle?: ViewStyle;
  source?: ReactNode;
  text: string;
}
const SocialMediaBtn = ({
  buttonType,
  text,
  imgStyle,
  source,
}: SocialMediaBtnProps) => {
  return (
    <TouchableOpacity style={[styles.social_btns, styles[buttonType]]}>
      <View style={[imgStyle]}>{source}</View>
      <Text style={styles.socialMedia_text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default SocialMediaBtn;

const styles = StyleSheet.create({
  social_btns: {
    alignSelf: 'center',
    alignItems: 'center',
    padding: 15,
    justifyContent: 'center',
    flexDirection: 'row',
    borderRadius: 10,
    gap: 12,
  },
  facebook_btn: {
    width: '47.5%',
    backgroundColor: '#3880DE',
  },
  google_btn: {
    width: '47.5%',
    backgroundColor: '#ffa700',
  },
  apple_btn: {
    width: '100%',
    backgroundColor: '#323232',
  },
  socialMedia_text: {
    color: 'white',
    alignSelf: 'center',
  },
  socialMedia_img: {
    width: 18,
    height: 18,
  },
});
