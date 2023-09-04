import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import ProfileInput from '../components_/inputs/ProfileInput';
import DropDownInput from '../components_/inputs/DropDownInput';
import OpenSuccessBtn from '../components_/buttons/modals/open/OpenSuccessBtn';
import Avatar from '../components_/profileContent/Avatar';
import DeleteAccountBtn from '../components_/buttons/accountManage/logOut_deleteAcc/DeleteAccountBtn';
import OpenAddPhotosBtn from '../components_/buttons/modals/open/OpenAddPhotosBtn';
import {useTranslation} from 'react-i18next';
import {styles} from './styles';

const Profile = () => {
  const {t} = useTranslation();
  return (
    <ScrollView>
      <View style={styles.profile}>
        <View style={styles.avatarWrap}>
          <Avatar />
        </View>
        <View style={styles.profileBlock}>
          <Text style={styles.blocksHeader}>{t('privatInfo')}</Text>
          <ProfileInput placeholder={'name'} />
          <ProfileInput placeholder={'email'} />
          <ProfileInput placeholder={'username'} />
          <DropDownInput />
          {/*Інпут Дати*/}
        </View>
        <View style={styles.profileBlock}>
          <Text style={styles.blocksHeader}>{t('publicInfo')}</Text>
          <ProfileInput placeholder={'occupation'} />
          <ProfileInput
            placeholder={
              'Як зробити висоту еластичною?????????????????7I’m very good girl, music lover, Justin Bieber biggest fan and social employer. Id like to use change the world!'
            }
          />
        </View>
        <View style={styles.profileBlock}>
          <Text style={styles.blocksHeader}>{t('webSocialLinks')}</Text>
          <ProfileInput placeholder={'Facebook'} />
          <ProfileInput placeholder={'Instagram'} />
          <ProfileInput placeholder={'Twitter'} />
          <ProfileInput placeholder={'Website'} />
        </View>
        <OpenSuccessBtn text={'save'} />
        <View style={styles.profileBlock}>
          <Text style={styles.blocksHeader}>{t('photos')}</Text>
          <OpenAddPhotosBtn />
        </View>
        <View style={styles.profileBlock}>
          <Text style={styles.blocksHeader}>Videos</Text>
          <ProfileInput placeholder={t('addLinkVideo')} />
        </View>
        <DeleteAccountBtn />
      </View>
    </ScrollView>
  );
};

export default Profile;
