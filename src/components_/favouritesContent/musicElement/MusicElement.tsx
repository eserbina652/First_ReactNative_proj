import React, {useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {FavoritesSVG, FullFavouritesSVG} from '../../../assets/image';
import {FavouritesData} from '../../../api/data/favouritesData';
import {styles} from './styles';
import {useTranslation} from 'react-i18next';

interface MusicElementProps {
  item: FavouritesData;
}
const MusicElement = ({item}: MusicElementProps) => {
  const {t} = useTranslation();
  const [favourite, setFavourite] = useState(item.description.star);
  return (
    <View key={item.id} style={[styles.mainContainer, styles.rowContainer]}>
      <View style={[styles.previewContainer, styles.rowContainer]}>
        <View style={styles.imgContainer}>
          <Image source={item.mainIcon} style={styles.img} />
        </View>
        <View style={styles.gap}>
          <Text style={styles.musicName}>{t(item.name)}</Text>
          <Text>{t(item.author)}</Text>
        </View>
      </View>
      <View style={[styles.descriptionContainer, styles.gap]}>
        <View style={styles.rowContainer}>
          <Text style={styles.countryName}>{t(item.description.country)}</Text>
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
