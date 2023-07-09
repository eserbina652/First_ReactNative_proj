import React from 'react';
import {
  Image,
  ImageStyle,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

interface SocialMediaBtnProps {
  buttonType: 'facebook_btn' | 'google_btn' | 'apple_btn';
  imgStyle?: ImageStyle;
  source: number;
  text: string;
}
const SocialMediaBtn = ({
  buttonType,
  text,
  imgStyle,
  source,
}: SocialMediaBtnProps) => {
  return (
    <TouchableOpacity style={styles[buttonType]}>
      <Image
        resizeMode={'contain'}
        style={[styles.socialMedia_img, imgStyle]}
        source={source}
      />
      <Text style={styles.socialMedia_text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default SocialMediaBtn;

const styles = StyleSheet.create({
  facebook_btn: {
    padding: 15,
    width: '47.5%',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: '#3880DE',
    borderRadius: 10,
    gap: 12,
  },
  google_btn: {
    padding: 15,
    width: '47.5%',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: '#E44E3B',
    borderRadius: 10,
    gap: 12,
  },
  apple_btn: {
    padding: 15,
    width: '100%',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: '#323232',
    borderRadius: 10,
    gap: 12,
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
