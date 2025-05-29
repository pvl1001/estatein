import i18next from 'i18next'
import { Ns } from 'shared/lib/const'
import { enPropertiesPage } from './i18n/en.ts'
import { ruPropertiesPage } from './i18n/ru.ts'

i18next.addResourceBundle(
    'en',
    Ns.PROPERTIES_PAGE,
    enPropertiesPage,
    true,
    true
)
i18next.addResourceBundle(
    'ru',
    Ns.PROPERTIES_PAGE,
    ruPropertiesPage,
    true,
    true
)

export { PropertiesPage } from './ui/PropertiesPage.tsx'
export type EnPropertiesPage = typeof enPropertiesPage
