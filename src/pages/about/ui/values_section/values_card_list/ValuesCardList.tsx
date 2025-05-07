import { FC } from 'react'
import { TCard } from 'shared/lib/types.ts'
import { Card } from 'shared/ui/card'
import s from './ValuesCardList.module.scss'

type Props = {
    cardList: TCard[]
}

export const ValuesCardList: FC<Props> = ({ cardList }) => {
    return (
        <ul className={s._}>
            {cardList.map((card) => (
                <li key={card.title}>
                    <Card {...card} />
                </li>
            ))}
        </ul>
    )
}
