import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ILanguages} from '../../api/data/languagesData';
import ChooseBtn from '../checkBox/ChooseBtn';

interface LanguageProps {
  item: ILanguages;
}
const Language = ({item}: LanguageProps) => {
  //як зробити редірект
  return (
    <View style={[styles.elContainer, item.isChecked && styles.chosen]}>
      <View style={styles.header}>
        <Text>{item.img}</Text>
        <Text>{item.langName}</Text>
      </View>
      <ChooseBtn isChecked={item.isChecked} />
    </View>
  );
};

export default Language;

const styles = StyleSheet.create({
  elContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 18,
    alignItems: 'center',
    paddingVertical: 16,
  },
  header: {
    flexDirection: 'row',
    gap: 14,
    alignItems: 'center',
  },
  chosen: {
    borderRadius: 15,
    borderColor: '#FF6ABE26',
    backgroundColor: '#FF6ABE26',
    borderWidth: 1,
  },
});
