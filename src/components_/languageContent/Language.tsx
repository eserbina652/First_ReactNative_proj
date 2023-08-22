import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ILanguages} from '../../api/data/languagesData';
import {useTranslation} from 'react-i18next';
import {AgreeSignSVG} from '../../assets/image';

interface LanguageProps {
  item: ILanguages;
}
const Language = ({item}: LanguageProps) => {
  const {t, i18n} = useTranslation();
  const currentLanguage = i18n.language;
  const [chosen, setChosen] = useState(item.translateKey === currentLanguage);

  useEffect(() => {
    setChosen(item.translateKey === currentLanguage);
  }, [currentLanguage, item.translateKey]);

  const changeCurrLang = () => {
    i18n.changeLanguage(item.translateKey);
  };
  return (
    <TouchableOpacity
      onPress={changeCurrLang}
      style={[styles.elContainer, chosen && styles.chosen]}>
      <View style={styles.header}>
        <Text>{item.img}</Text>
        <Text>{t(item.langName)}</Text>
      </View>
      {chosen && <AgreeSignSVG />}
    </TouchableOpacity>
  );
};

export default Language;

const styles = StyleSheet.create({
  elContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    marginBottom: 5,
  },
  header: {
    flexDirection: 'row',
    gap: 14,
    color: 'black',
    fontSize: 15,
  },
  chosen: {
    borderRadius: 15,
    borderColor: '#FF6ABE26',
    backgroundColor: '#FF6ABE26',
    borderWidth: 1,
  },
});
