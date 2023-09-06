import React, {useState} from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {ChangeAvatarSVG} from '../../assets/image';
import {profileData} from '../../api/data/profileData';

const defaultAvatar = profileData.avatar;

const Avatar = () => {
  const [avatar, setAvatar] = useState(defaultAvatar);

  const onChangeAvatar = () => {
    setAvatar(avatar);
  };
  return (
    <View style={styles.imageWrap}>
      <Image style={styles.image} source={avatar} />
      <TouchableOpacity style={styles.changePhotoBtn}>
        <ChangeAvatarSVG />
      </TouchableOpacity>
    </View>
  );
};

export default Avatar;

const styles = StyleSheet.create({
  imageWrap: {width: 134, height: 135},
  image: {width: '100%', height: '100%'},
  changePhotoBtn: {
    width: 56,
    height: 56,
    padding: 8,
    backgroundColor: 'white',
    borderRadius: 50,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 0,
    right: 0,
    marginBottom: -12,
    marginRight: -7,
  },
});
