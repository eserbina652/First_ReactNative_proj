import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import SimpleInput from '../components_/inputs/SimpleInput';
import DropDownInput from '../components_/inputs/dropDownInput/DropDownInput';
import OpenSuccessBtn from '../components_/buttons/modalssBtns/open/OpenSuccessBtn';
import Avatar from '../components_/profileContent/Avatar';
import DeleteAccountBtn from '../components_/buttons/deleteAccount/DeleteAccountBtn';
import OpenAddPhotosBtn from '../components_/buttons/AddPhotosBtn';
import {useTranslation} from 'react-i18next';

const Profile = () => {
  const {t} = useTranslation();
  return (
    <ScrollView>
      <View style={styles.profile}>
        <View style={styles.avatarWrap}>
          <Avatar />
        </View>
        <View style={styles.profileBlock}>
          <Text style={styles.bloksHeader}>{t('privatInfo')}</Text>
          <SimpleInput placeholder={'name'} />
          <SimpleInput placeholder={'email'} />
          <SimpleInput placeholder={'username'} />
          <DropDownInput />
          {/*Інпут Дати*/}
        </View>
        <View style={styles.profileBlock}>
          <Text style={styles.bloksHeader}>{t('publicInfo')}</Text>
          <SimpleInput placeholder={'occupation'} />
          <SimpleInput
            placeholder={
              'Як зробити висоту еластичною?????????????????7I’m very good girl, music lover, Justin Bieber biggest fan and social employer. Id like to use change the world!'
            }
          />
        </View>
        <View style={styles.profileBlock}>
          <Text style={styles.bloksHeader}>{t('webSocialLinks')}</Text>
          <SimpleInput placeholder={'Facebook'} />
          <SimpleInput placeholder={'Instagram'} />
          <SimpleInput placeholder={'Twitter'} />
          <SimpleInput placeholder={'Website'} />
        </View>
        <OpenSuccessBtn text={'save'} />
        <View style={styles.profileBlock}>
          <Text style={styles.bloksHeader}>{t('photos')}</Text>
          <OpenAddPhotosBtn />
        </View>
        <View style={styles.profileBlock}>
          <Text style={styles.bloksHeader}>Videos</Text>
          <SimpleInput placeholder={t('addLinkVideo')} />
        </View>
        <DeleteAccountBtn />
      </View>
    </ScrollView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  profile: {
    gap: 40,
    backgroundColor: 'white',
    paddingHorizontal: 26,
    paddingVertical: 40,
    flex: 1,
  },
  profileBlock: {gap: 15},
  bloksHeader: {
    color: 'black',
    fontSize: 14,
    paddingBottom: 10,
  },
  avatarWrap: {
    alignItems: 'center',
  },
});
