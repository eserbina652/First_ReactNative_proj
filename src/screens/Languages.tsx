import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {languages} from '../api/data/languagesData';
import Language from '../components_/languageContent/Language';
import SimpleBtn from '../components_/buttons/SimpleBtn';

const Languages = () => {
  return (
    <View style={styles.languages}>
      <FlatList
        data={languages}
        renderItem={({item}) => <Language item={item} key={item.id} />}
      />
      <SimpleBtn text={'Ok'} />
    </View>
  );
};

export default Languages;

const styles = StyleSheet.create({
  languages: {
    padding: 28,
    height: '100%',
    justifyContent: 'space-between',
  },
});
