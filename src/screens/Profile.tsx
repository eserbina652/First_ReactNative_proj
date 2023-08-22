import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import SimpleInput from '../components_/inputs/SimpleInput';
import DropDownInput from '../components_/inputs/dropDownInput/DropDownInput';
import OpenSuccessBtn from '../components_/buttons/modalssBtns/open/OpenSuccessBtn';
import AddPhotosBtn from '../components_/buttons/AddPhotosBtn';
import Avatar from '../components_/profileContent/Avatar';
import DeleteAccountBtn from '../components_/buttons/deleteAccount/DeleteAccountBtn';

const Profile = () => {
  return (
    <ScrollView>
      <View style={styles.profile}>
        <View style={styles.avatarWrap}>
          <Avatar />
        </View>
        <View style={styles.profileBlock}>
          <Text style={styles.bloksHeader}>Private Information</Text>
          <SimpleInput placeholder={'name'} />
          <SimpleInput placeholder={'email'} />
          <SimpleInput placeholder={'username'} />
          <DropDownInput />
          {/*Інпут Дати*/}
        </View>
        <View style={styles.profileBlock}>
          <Text style={styles.bloksHeader}>Public Information</Text>
          <SimpleInput placeholder={'Occupation'} />
          <SimpleInput
            placeholder={
              'Як зробити висоту еластичною?????????????????7I’m very good girl, music lover, Justin Bieber biggest fan and social employer. Id like to use change the world!'
            }
          />
        </View>
        <View style={styles.profileBlock}>
          <Text style={styles.bloksHeader}>Web & Social links</Text>
          <SimpleInput placeholder={'Facebook'} />
          <SimpleInput placeholder={'Instagram'} />
          <SimpleInput placeholder={'Twitter'} />
          <SimpleInput placeholder={'Website'} />
        </View>
        <OpenSuccessBtn text={'Save Changes'} />
        <View style={styles.profileBlock}>
          <Text style={styles.bloksHeader}>Photos</Text>
          <AddPhotosBtn />
        </View>
        <View style={styles.profileBlock}>
          <Text style={styles.bloksHeader}>Videos</Text>
          <SimpleInput placeholder={'Add link video'} />
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
