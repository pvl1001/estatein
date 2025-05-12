import { initReactI18next } from 'react-i18next'
import i18next from 'i18next'
import { en, enGlossary, ru, ruGlossary } from 'shared/i18n'
import { uppAll, uppAllModule } from './modules/uppAll.ts'
import { uppFirst, uppFirstModule } from './modules/uppFirst.ts'

export const resources = {
    en: { translation: en, glossary: enGlossary },
    ru: { translation: ru, glossary: ruGlossary },
} as const

i18next
    .use(initReactI18next)
    .use(uppFirstModule)
    .use(uppAllModule)
    .init({
        lng: 'en',
        fallbackLng: ['en', 'ru'],
        ns: ['translation', 'glossary'],
        resources,
        debug: false,
    })
    .finally(() => {
        i18next.services.formatter?.add('uppFirst', uppFirst)
        i18next.services.formatter?.add('uppAll', uppAll)
    })
