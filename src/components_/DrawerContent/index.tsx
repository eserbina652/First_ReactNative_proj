import {Image, Text, View} from 'react-native';
import {ProfileIMG} from '../../assets/image';
import ShareBtn from '../buttons/ShareBtn';
import RedirectBtn from '../buttons/RedirectBtn';
import React, {useEffect, useState} from 'react';
import {ScreensName} from '../../constants';
import {styles} from './styles';
import {useTranslation} from 'react-i18next';
import LogOutBtn from '../buttons/accountManage/logOut_deleteAcc/LogOutBtn';
import {UserDataI, userProfileData} from '../../api/data/profileData';
import EncryptedStorage from 'react-native-encrypted-storage';

export default () => {
  const {t} = useTranslation();
  const [userData, setUserData] = useState<UserDataI>(userProfileData);
  const getUserData = async () => {
    const registerData = await EncryptedStorage.getItem('registerData');
    if (registerData) {
      const parsedRegisterData = JSON.parse(registerData);
      setUserData(prevState => ({
        ...prevState,
        email: parsedRegisterData.email,
        country: parsedRegisterData.country,
        name: parsedRegisterData.name,
        username: parsedRegisterData.username,
      }));
      console.log('USER DATA PROFILE', userData);
    }
  };
  useEffect(() => {
    getUserData();
  }, []);
  //перенести логіку редіректу, для всього блоку замість кнопки
  return (
    <View style={styles.mainContainer}>
      <View style={styles.header}>
        <View style={styles.imageWrap}>
          <Image style={styles.image} source={ProfileIMG} />
        </View>
        <Text style={styles.username}>{userData.username}</Text>
      </View>
      <View style={styles.menuItemWrap}>
        <View style={styles.menuItem}>
          <Text style={styles.screenText}>{t('profile')}</Text>
          <RedirectBtn redirectTo={ScreensName.PROFILE} />
        </View>
        <View style={styles.menuItem}>
          <Text style={styles.screenText}>{t('currentLanguage')}</Text>
          <View style={styles.itemElements}>
            <Text>{t('language')}</Text>
            <RedirectBtn redirectTo={ScreensName.LANGUAGE} />
          </View>
        </View>
        <View style={styles.menuItem}>
          <Text style={styles.screenText}>{t('friend')}</Text>
          <View style={styles.itemElements}>
            <ShareBtn />
            <RedirectBtn redirectTo={ScreensName.FRIEND} />
          </View>
        </View>
      </View>
      <LogOutBtn />
    </View>
  );
};
