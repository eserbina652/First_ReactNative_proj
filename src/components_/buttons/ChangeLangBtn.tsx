import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {useTranslation} from 'react-i18next';
import i18n from 'i18next';

const ChangeLangBtn = () => {
  const {t} = useTranslation();
  const [lang, setLang] = useState('en');
  const handleClick = () => {
    let newLang = 'en';
    if (lang === 'en') {
      newLang = 'uk';
    } else if (lang === 'uk') {
      newLang = 'pl';
    } else if (lang === 'pl') {
      newLang = 'en';
    }
    i18n.changeLanguage(newLang).finally(() => {
      setLang(newLang);
    });
  };
  return (
    <TouchableOpacity style={styles.buttonWrap} onPress={handleClick}>
      <Text style={styles.text}>{t('language')}</Text>
    </TouchableOpacity>
  );
};

export default ChangeLangBtn;

const styles = StyleSheet.create({
  buttonWrap: {
    width: '15%',
  },
  text: {
    fontSize: 25,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
