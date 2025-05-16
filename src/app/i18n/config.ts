import { initReactI18next } from 'react-i18next'
import i18next from 'i18next'
import { enMainPage, ruMainPage } from 'pages/main'
import { enFooter, ruFooter } from 'widgets/footer'
import { enNav, ruNav } from 'widgets/header'
import { enJourney, ruJourney } from 'widgets/start_journey'
import { en, enGlossary, ru, ruGlossary } from 'shared/i18n'
import { Ns } from 'shared/lib/const'
import { uppAllModule } from './modules/uppAll.ts'
import { uppFirstModule } from './modules/uppFirst.ts'

const resources = {
    en: {
        [Ns.TRANSLATION]: en,
        [Ns.GLOSSARY]: enGlossary,
        [Ns.NAV]: enNav,
        [Ns.MAIN_PAGE]: enMainPage,
        [Ns.JOURNEY]: enJourney,
        [Ns.FOOTER]: enFooter,
    },
    ru: {
        [Ns.TRANSLATION]: ru,
        [Ns.GLOSSARY]: ruGlossary,
        [Ns.NAV]: ruNav,
        [Ns.MAIN_PAGE]: ruMainPage,
        [Ns.JOURNEY]: ruJourney,
        [Ns.FOOTER]: ruFooter,
    },
} as const

void i18next
    .use(initReactI18next)
    .use(uppFirstModule)
    .use(uppAllModule)
    .init({
        fallbackLng: ['en', 'ru'],
        resources,
        debug: false,
    })

export type TResources = typeof resources.en
