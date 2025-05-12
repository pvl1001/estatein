import { useTranslation } from 'react-i18next'
import { FC } from 'react'
import { Text } from '../../text'
import { TCountItem } from '../types.ts'
import s from './CounterContainer.module.scss'

type Props = TCountItem

export const CounterContainer: FC<Props> = ({ count, textKey }) => {
    const { t } = useTranslation()
    return (
        <div className={s._}>
            <span className={s.count}>{count}</span>
            <Text.Description>
                {t(`counter_card.${textKey}`, { postProcess: 'uppAll' })}
            </Text.Description>
        </div>
    )
}
