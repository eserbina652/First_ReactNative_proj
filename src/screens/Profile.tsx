import React from 'react';
import {Text, View} from 'react-native';
import SimpleInput from '../components_/inputs/SimpleInput';
import DropDownInput from '../components_/inputs/dropDownInput/DropDownInput';
import SimpleBtn from '../components_/buttons/SimpleBtn';
import AddPhotosBtn from '../components_/buttons/AddPhotosBtn';
import Avatar from '../components_/profileContent/Avatar';
import DeleteAccountBtn from '../components_/buttons/deleteAccount/DeleteAccountBtn';

const Profile = () => {
  return (
    <View>
      <Avatar />
      <View>
        <Text>Private Information</Text>
        <SimpleInput placeholder={'name'} />
        <SimpleInput placeholder={'email'} />
        <SimpleInput placeholder={'username'} />
        <DropDownInput />
        {/*Інпут Дати*/}
      </View>
      <View>
        <Text>Public Information</Text>
        <SimpleInput placeholder={'Occupation'} />
        <SimpleInput
          placeholder={
            'I’m very good girl, music lover, Justin Bieber biggest fan and social employer. Id like to use change the world!'
          }
        />
      </View>
      <View>
        <Text>Web & Social links</Text>
        <SimpleInput placeholder={'Facebook'} />
        <SimpleInput placeholder={'Instagram'} />
        <SimpleInput placeholder={'Twitter'} />
        <SimpleInput placeholder={'Website'} />
      </View>
      <SimpleBtn text={'Save Changes'} />
      <View>
        <Text>Photos</Text>
        <AddPhotosBtn />
      </View>
      <View>
        <Text>Videos</Text>
        <SimpleInput placeholder={'Add link video'} />
      </View>
      <DeleteAccountBtn />
    </View>
  );
};

export default Profile;
