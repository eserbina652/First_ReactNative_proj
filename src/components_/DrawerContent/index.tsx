import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ProfileIMG} from '../../assets/image';
import ShareBtn from '../buttons/ShareBtn';
import RedirectBtn from '../buttons/RedirectBtn';
import React from 'react';
import {ScreensName} from '../../constants';

export default () => {
  return (
    <View style={styles.mainContainer}>
      <View>
        <Image source={ProfileIMG} />
        <Text>Dima Kisov</Text>
      </View>
      <View>
        <View>
          <Text style={styles.screenText}>Profile</Text>
          <RedirectBtn redirectTo={ScreensName.PROFILE} />
        </View>
        <View>
          <Text style={styles.screenText}>Language</Text>
          <View>
            <Text>🇵🇱</Text>
            <RedirectBtn redirectTo={ScreensName.LANGUAGE} />
          </View>
        </View>
        <View>
          <Text style={styles.screenText}>Invite Friend</Text>
          <View>
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

const styles = StyleSheet.create({
  mainContainer: {
    padding: 20,
    justifyContent: 'space-between',
    flex: 1,
  },
  screenText: {fontSize: 18, fontWeight: '700', color: 'grey'},
  logOut: {
    fontSize: 18,
    fontWeight: '700',
    color: 'grey',
    alignSelf: 'flex-end',
  },
});
