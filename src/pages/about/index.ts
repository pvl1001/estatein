import i18next from 'i18next'
import { Ns } from 'shared/lib/const'
import { enAboutPage } from './i18n/en'
import { ruAboutPage } from './i18n/ru'

i18next.addResourceBundle('en', Ns.ABOUT_PAGE, enAboutPage, true, true)
i18next.addResourceBundle('ru', Ns.ABOUT_PAGE, ruAboutPage, true, true)

export { AboutPage } from './ui/AboutPage'
export type EnAboutPage = typeof enAboutPage
