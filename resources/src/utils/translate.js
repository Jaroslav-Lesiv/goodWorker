import en from '../assets/langs/en.json';
import ua from '../assets/langs/ua.json';
import storage from '../service/storage';
import { setTranslations, setDefaultLanguage } from 'multi-lang';

const lang = storage.get('lang') || 'ua';
// Do this two lines only when setting up the application
setTranslations({ ua, en });
setDefaultLanguage(lang);
