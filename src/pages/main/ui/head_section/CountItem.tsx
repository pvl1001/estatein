import { FC } from 'react'
import { Text } from 'shared/ui/text'
import s from './HeadSection.module.scss'

type Props = {
    count: string
    text: string
}

export const CountItem: FC<Props> = ({ count, text }) => {
    return (
        <div className={s.count_item}>
            <span className={s.count_item__count}>{count}</span>
            <Text.Description>{text}</Text.Description>
        </div>
    )
}
