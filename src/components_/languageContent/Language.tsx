import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ILanguages} from '../../api/data/languagesData';
import {useTranslation} from 'react-i18next';
import {AgreeSignSVG} from '../../assets/image';

interface LanguageProps {
  item: ILanguages;
  onPress: (item: ILanguages) => void;
  chosen: string;
}
const Language = ({item, onPress, chosen}: LanguageProps) => {
  const {t} = useTranslation();
  return (
    <TouchableOpacity
      onPress={() => onPress(item)}
      style={[
        styles.elContainer,
        chosen === item.translateKey && styles.chosen,
      ]}>
      <View style={styles.header}>
        <Text>{item.img}</Text>
        <Text>{t(item.langName)}</Text>
      </View>
      {chosen === item.translateKey && <AgreeSignSVG />}
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
