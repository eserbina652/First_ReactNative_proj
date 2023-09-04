import React from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
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
    <TouchableOpacity style={styles.imageWrap} onPress={openShareMenu}>
      <Image style={styles.image} source={AddPNG} />
    </TouchableOpacity>
  );
};

export default ShareBtn;

const styles = StyleSheet.create({
  imageWrap: {
    width: 20,
    height: 20,
    borderRadius: 50,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
