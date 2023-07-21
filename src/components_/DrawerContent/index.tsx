import {StyleSheet, Text, View} from 'react-native';

export default () => {
  return (
    <View style={styles.mainContainer}>
      <View>
        <Text style={styles.screenText}>Favourites photo</Text>
        <Text style={styles.screenText}>Shared photo</Text>
      </View>
      <Text style={styles.logOut}>LogOut</Text>
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
