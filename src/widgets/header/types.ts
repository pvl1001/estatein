import { LanguageStore } from 'shared/i18n'
import { Ns } from 'shared/lib/const'

export type NavListItem = {
    name: LanguageStore<Ns.NAV>
    path: string
}
