import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {favourites} from '../api/data/favouritesData';
import MusicElement from '../components_/MusicElement';
//PROFILE

const options = favourites;
const Favourites = () => {
  return (
    <View style={styles.mainContainer}>
      <FlatList
        data={options}
        renderItem={({item}) => <MusicElement item={item} />}
      />
    </View>
  );
};

export default Favourites;

const styles = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: 20,
  },
});
