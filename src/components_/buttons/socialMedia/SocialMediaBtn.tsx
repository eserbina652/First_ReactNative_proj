import React, {ReactNode} from 'react';
import {Text, TouchableOpacity, View, ViewStyle} from 'react-native';
import {styles} from './styles';

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
