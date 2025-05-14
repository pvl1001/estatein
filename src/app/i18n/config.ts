import { initReactI18next } from 'react-i18next'
import i18next from 'i18next'
import { enAboutPage, ruAboutPage } from 'pages/about'
import { enMainPage, ruMainPage } from 'pages/main'
import { enFooter, ruFooter } from 'widgets/footer'
import { enNav, ruNav } from 'widgets/header'
import { enJourney, ruJourney } from 'widgets/start_journey'
import { en, enGlossary, ru, ruGlossary } from 'shared/i18n'
import { uppAllModule } from './modules/uppAll.ts'
import { uppFirstModule } from './modules/uppFirst.ts'

export const resources = {
    en: {
        translation: en,
        glossary: enGlossary,
        nav: enNav,
        mainPage: enMainPage,
        aboutPage: enAboutPage,
        journey: enJourney,
        footer: enFooter,
    },
    ru: {
        translation: ru,
        glossary: ruGlossary,
        nav: ruNav,
        mainPage: ruMainPage,
        aboutPage: ruAboutPage,
        journey: ruJourney,
        footer: ruFooter,
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
