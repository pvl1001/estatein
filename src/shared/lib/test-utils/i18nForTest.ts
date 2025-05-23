import { initReactI18next } from 'react-i18next'
import i18nForTest from 'i18next'
import { Ns } from '../const'

void i18nForTest.use(initReactI18next).init({
    lng: 'en',
    fallbackLng: 'en',
    ns: [Ns.TRANSLATION],
    defaultNS: Ns.TRANSLATION,
    interpolation: {
        escapeValue: false, // not needed for react!!
    },
    resources: {
        en: { translations: {} },
        ru: { translations: {} },
    },
})

export default i18nForTest
