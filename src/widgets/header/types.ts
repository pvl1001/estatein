import { LanguageStore } from 'shared/i18n'

export type NavListItem = {
    name: LanguageStore<'nav'>
    path: string
}
