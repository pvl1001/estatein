import { ReactNode } from 'react'
import { en } from '../../i18n'

export type THeadCard = {
    icon: ReactNode
    textKey: keyof typeof en.head_card
}
