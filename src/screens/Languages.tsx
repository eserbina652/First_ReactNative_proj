import React from 'react';
import {FlatList, View} from 'react-native';
import {languages} from '../api/data/languagesData';
import Language from '../components_/languageContent/Language';
import SimpleBtn from '../components_/buttons/SimpleBtn';

const Languages = () => {
  return (
    <View>
      <FlatList
        data={languages}
        renderItem={({item}) => <Language item={item} key={item.id} />}
      />
      <SimpleBtn text={'Ok'} />
    </View>
  );
};

export default Languages;
