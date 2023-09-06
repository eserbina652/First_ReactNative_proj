import React, {useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {ILanguages, languages} from '../api/data/languagesData';
import Language from '../components_/languageContent/Language';
import SimpleBtn from '../components_/buttons/SimpleBtn';
import {useTranslation} from 'react-i18next';
export type Nullable<T> = T | null;
const Languages = () => {
  const {i18n} = useTranslation();
  const currentLanguage = i18n.language;
  const [chosen, setChosen] = useState(currentLanguage);

  // useEffect(() => {
  // }, [currentLanguage, item.translateKey]);

  const handleChoseLang = (item: ILanguages) => {
    setChosen(item.translateKey);
  };
  const changeCurrLang = () => {
    i18n.changeLanguage(chosen);
  };
  return (
    <View style={styles.languages}>
      <FlatList
        data={languages}
        renderItem={({item}) => (
          <Language
            chosen={chosen}
            onPress={handleChoseLang}
            item={item}
            key={item.id}
          />
        )}
      />
      <SimpleBtn text={'Ok'} onPress={changeCurrLang} />
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
