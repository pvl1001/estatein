import { FC } from 'react'
import { Text } from '../text'
import s from './CounterContainer.module.scss'

type Props = {
    count: string
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
