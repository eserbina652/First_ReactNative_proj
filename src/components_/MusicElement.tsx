import React, {useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {FavoritesSVG, FullFavouritesSVG} from '../assets/image';
import {FavouritesData} from '../api/data/favouritesData';

interface MusicElementProps {
  item: FavouritesData;
}
const MusicElement = ({item}: MusicElementProps) => {
  const [favourite, setFavourite] = useState(item.description.star);
  return (
    <View key={item.id} style={[styles.mainContainer, styles.rowContainer]}>
      <View style={[styles.previewContainer, styles.rowContainer]}>
        <View style={styles.imgContainer}>
          <Image source={item.mainIcon} style={styles.img} />
        </View>
        <View style={styles.gap}>
          <Text style={styles.musicName}>{item.name}</Text>
          <Text>{item.author}</Text>
        </View>
      </View>
      <View style={[styles.descriptionContainer, styles.gap]}>
        <View style={styles.rowContainer}>
          <Text style={styles.countryName}>{item.description.country}</Text>
          <Text>{item.description.flag}</Text>
        </View>
        <View style={[styles.rowContainer, styles.gap]}>
          <Text>{item.description.vp}</Text>
          <TouchableOpacity onPress={() => setFavourite(!favourite)}>
            {favourite ? (
              <FullFavouritesSVG />
            ) : (
              <FavoritesSVG color={'#FF9CD4'} />
            )}
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default MusicElement;

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
  },
  mainContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 12,
  },
  previewContainer: {
    gap: 15,
    alignItems: 'center',
  },
  imgContainer: {
    width: 66,
    height: 66,
  },
  img: {
    width: '100%',
    height: '100%',
  },
  descriptionContainer: {
    alignItems: 'flex-end',
  },
  musicName: {
    fontWeight: '700',
    color: 'black',
  },
  countryName: {
    color: 'black',
  },
  gap: {
    gap: 5,
  },
});
