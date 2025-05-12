import { ReactNode } from 'react'
import { LanguageStore } from '../../i18n'

export type THeadCard = {
    icon: ReactNode
    textKey: LanguageStore<'head_card'>
}
