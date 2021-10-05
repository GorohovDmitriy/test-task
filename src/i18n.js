import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import common_en from './components/translate/en.json'
import common_ru from './components/translate/ru.json'


const resources = {
	en: {
		translation: common_en
	},
	ru: {
		translation: common_ru
	},
}
i18n.use(initReactI18next).init({
	resources,
	lng: 'ru',
	keySeparator: false,
	interpolation: {
		escapeValue: false
	},
})
export default i18n