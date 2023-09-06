import React, {useEffect, useState} from 'react';
import {ScrollView, Text, View} from 'react-native';
import OpenSuccessBtn from '../components_/buttons/modals/open/OpenSuccessBtn';
import Avatar from '../components_/profileContent/Avatar';
import DeleteAccountBtn from '../components_/buttons/accountManage/logOut_deleteAcc/DeleteAccountBtn';
import OpenAddPhotosBtn from '../components_/buttons/modals/open/OpenAddPhotosBtn';
import {useTranslation} from 'react-i18next';
import {styles} from './styles';
import EncryptedStorage from 'react-native-encrypted-storage';
import ProfileInput from '../components_/inputs/ProfileInput';
// import DropDownInput from '../components_/inputs/DropDownInput';
import {UserDataI, userProfileData} from '../api/data/profileData';
import DropDownInput from '../components_/inputs/DropDownInput';

const Profile = () => {
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
  const onChangeProfileInfo = (key: string, text: string) => {
    setUserData(prevState => ({...prevState, [key]: text}));
  };
  return (
    <ScrollView>
      <View style={styles.profile}>
        <View style={styles.avatarWrap}>
          <Avatar />
        </View>
        <View style={styles.profileBlock}>
          <Text style={styles.blocksHeader}>{t('privatInfo')}</Text>
          <ProfileInput
            inputValue={userData.name}
            onChange={onChangeProfileInfo}
            placeholder={'name'}
          />
          <ProfileInput
            inputValue={userData.email}
            onChange={onChangeProfileInfo}
            placeholder={'email'}
          />
          <ProfileInput
            inputValue={userData.username}
            onChange={onChangeProfileInfo}
            placeholder={'username'}
          />
          <DropDownInput
            onChange={onChangeProfileInfo}
            currentOption={userData.country}
          />
          {/*Інпут Дати*/}
        </View>
        <View style={styles.profileBlock}>
          <Text style={styles.blocksHeader}>{t('publicInfo')}</Text>
          <ProfileInput
            inputValue={userData.occupation}
            onChange={onChangeProfileInfo}
            placeholder={'occupation'}
          />
          <ProfileInput
            inputValue={userData.description}
            onChange={onChangeProfileInfo}
            placeholder={
              'Як зробити висоту еластичною?????????????????7I’m very good girl, music lover, Justin Bieber biggest fan and social employer. Id like to use change the world!'
            }
          />
        </View>
        <View style={styles.profileBlock}>
          <Text style={styles.blocksHeader}>{t('webSocialLinks')}</Text>
          <ProfileInput
            inputValue={userData.facebook}
            onChange={onChangeProfileInfo}
            placeholder={'Facebook'}
          />
          <ProfileInput
            inputValue={userData.instagram}
            onChange={onChangeProfileInfo}
            placeholder={'Instagram'}
          />
          <ProfileInput
            inputValue={userData.twitter}
            onChange={onChangeProfileInfo}
            placeholder={'Twitter'}
          />
          <ProfileInput
            inputValue={userData.website}
            onChange={onChangeProfileInfo}
            placeholder={'Website'}
          />
        </View>
        <OpenSuccessBtn text={'save'} />
        <View style={styles.profileBlock}>
          <Text style={styles.blocksHeader}>{t('photos')}</Text>
          <OpenAddPhotosBtn />
        </View>
        <View style={styles.profileBlock}>
          <Text style={styles.blocksHeader}>Videos</Text>
          <ProfileInput
            inputValue={userData.video}
            onChange={onChangeProfileInfo}
            placeholder={t('addLinkVideo')}
          />
        </View>
        <DeleteAccountBtn />
      </View>
    </ScrollView>
  );
};

export default Profile;
