import { FC } from 'react'
import { Text } from '../../text'
import { TCountItem } from '../types.ts'
import s from './CounterContainer.module.scss'

type Props = Omit<TCountItem, 'textKey'> & {
    text: string
}

export const CounterContainer: FC<Props> = ({ count, text }) => {
    return (
        <div className={s._}>
            <span className={s.count}>{count}</span>
            <Text.Description>{text}</Text.Description>
        </div>
    )
}
