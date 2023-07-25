import React, {useState} from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import {ChangeAvatarSVG} from '../../assets/image';
import {profileData} from '../../api/data/profileData';

const defaultAvatar = profileData.avatar;

const Avatar = () => {
  const [avatar, setAvatar] = useState(defaultAvatar);

  const onChangeAvatar = () => {
    setAvatar(avatar);
  };
  return (
    <View>
      <Image source={defaultAvatar} />
      <TouchableOpacity onPress={onChangeAvatar}>
        <ChangeAvatarSVG />
      </TouchableOpacity>
    </View>
  );
};

export default Avatar;
