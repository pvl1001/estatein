import { FC } from 'react'
import cn from 'classnames'
import { TextBox } from 'shared/ui/text_box'
import { aboutValueCards } from '../../lib/aboutValueCards.tsx'
import { ValuesCardList } from './values_card_list/ValuesCardList.tsx'
import s from './ValuesSection.module.scss'

type Props = {}

export const ValuesSection: FC<Props> = () => {
    return (
        <section className={cn(s._, 'wrapper')}>
            <TextBox
                withStars
                className={s.text_box}
                title={'Our Values'}
                description={
                    'Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary.'
                }
            />
            <ValuesCardList cardList={aboutValueCards} />
        </section>
    )
}
