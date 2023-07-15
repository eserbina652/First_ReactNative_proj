import {localizationConfig} from './src/localization/index';
import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import {getLocales} from 'react-native-localize';

const resources = {
  en: {
    main: localizationConfig.mainEn,
  },
  uk: {
    main: localizationConfig.mainUk,
  },
  pl: {
    main: localizationConfig.mainPl,
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
