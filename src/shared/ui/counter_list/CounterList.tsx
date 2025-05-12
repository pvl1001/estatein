import { FC } from 'react'
import { CounterContainer } from './counter_container/CounterContainer'
import { TCountItem } from './types'
import s from './CounterList.module.scss'

type Props = {
    counterList: TCountItem[]
}

export const CounterList: FC<Props> = ({ counterList }) => {
    return (
        <ul className={s._}>
            {counterList.map((item) => (
                <li key={item.textKey}>
                    <CounterContainer {...item} />
                </li>
            ))}
        </ul>
    )
}
