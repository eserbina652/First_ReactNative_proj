import React from 'react';
import {ILanguages} from '../../../api/data/languagesData';
import {Text, TouchableOpacity} from 'react-native';
import {styles} from '../modals';
import {useTranslation} from 'react-i18next';

interface AcceptNewLangProps {
  item: ILanguages;
}
const AcceptNewLangBtn = ({item}: AcceptNewLangProps) => {
  const {i18n} = useTranslation();

  const changeCurrLang = () => {
    i18n.changeLanguage(item.translateKey);
  };
  return (
    <TouchableOpacity style={styles.active_btn} onPress={changeCurrLang}>
      <Text style={styles.login_btn_text}>ok</Text>
    </TouchableOpacity>
  );
};

export default AcceptNewLangBtn;
