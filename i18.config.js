import {localizationConfig} from './src/localization';
import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import {getLocales} from 'react-native-localize';

const resources = {
  en: {
    main: localizationConfig.mainEn,
    sub: localizationConfig.subEn,
  },
  uk: {
    main: localizationConfig.mainUk,
    sub: localizationConfig.subUk,
  },
  pl: {
    main: localizationConfig.mainPl,
    sub: localizationConfig.subPl,
  },
};

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  lng: getLocales()[0].languageCode,
  fallbackLng: 'en',
  resources,
  ns: ['main', 'sub'],
  defaultNS: ['main'],
});

export default i18n;
