import i18next from 'i18next'
import { Ns } from 'shared/lib/const'
import { enDetailsPage } from './i18n/en.ts'
import { ruDetailsPage } from './i18n/ru.ts'

i18next.addResourceBundle(
    'en',
    Ns.PROPERTY_DETAILS_PAGE,
    enDetailsPage,
    true,
    true
)
i18next.addResourceBundle(
    'ru',
    Ns.PROPERTY_DETAILS_PAGE,
    ruDetailsPage,
    true,
    true
)

export { PropertyDetailsPage } from './ui/PropertyDetailsPage'
export type EnDetailsPage = typeof enDetailsPage
