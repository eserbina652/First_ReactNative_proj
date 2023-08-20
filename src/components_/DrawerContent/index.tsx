import {Image, Text, TouchableOpacity, View} from 'react-native';
import {ProfileIMG} from '../../assets/image';
import ShareBtn from '../buttons/ShareBtn';
import RedirectBtn from '../buttons/RedirectBtn';
import React from 'react';
import {ScreensName} from '../../constants';
import {styles} from './styles';

export default () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.header}>
        <View style={styles.imageWrap}>
          <Image style={styles.image} source={ProfileIMG} />
        </View>
        <Text style={styles.username}>Dima Kisov</Text>
      </View>
      <View style={styles.menuItemWrap}>
        <View style={styles.menuItem}>
          <Text style={styles.screenText}>Profile</Text>
          <RedirectBtn redirectTo={ScreensName.PROFILE} />
        </View>
        <View style={styles.menuItem}>
          <Text style={styles.screenText}>Language</Text>
          <View style={styles.itemElements}>
            <Text>🇵🇱</Text>
            <RedirectBtn redirectTo={ScreensName.LANGUAGE} />
          </View>
        </View>
        <View style={styles.menuItem}>
          <Text style={styles.screenText}>Invite Friend</Text>
          <View style={styles.itemElements}>
            <ShareBtn />
            <RedirectBtn redirectTo={ScreensName.FRIEND} />
          </View>
        </View>
      </View>
      <TouchableOpacity style={styles.logOut}>
        <Text>LogOut</Text>
      </TouchableOpacity>
    </View>
  );
};
