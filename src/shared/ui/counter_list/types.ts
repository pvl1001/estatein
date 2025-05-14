import { en } from '../../i18n'

export type TCountItem = {
    count: string
    textKey: keyof typeof en.counter_card
}
