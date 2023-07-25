import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import {AddPNG} from '../../assets/image';
import Share from 'react-native-share';
const ShareBtn = () => {
  const openShareMenu = () => {
    const shareOptions = {
      message: 'Сообщение для публикации',
      url: 'https://example.com',
      title: 'Заголовок (опционально)',
    };

    Share.open(shareOptions)
      .then(res => console.log('Успешно поделено:', res))
      .catch(err => console.log('Ошибка при попытке поделиться:', err));
  };
  return (
    <TouchableOpacity onPress={openShareMenu}>
      <Image source={AddPNG} />
    </TouchableOpacity>
  );
};

export default ShareBtn;
