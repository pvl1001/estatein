import { FC } from 'react'
import cn from 'classnames'
import { Card } from 'shared/ui/card'
import { TextBox } from 'shared/ui/text_box'
import { achievementCards } from '../../lib/achievementCards.ts'
import s from './AchievementsSection.module.scss'

type Props = {}

export const AchievementsSection: FC<Props> = () => {
    return (
        <section className={cn(s._, 'wrapper')}>
            <TextBox
                withStars
                title={'Our Achievements'}
                description={
                    'Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary.'
                }
            />

            <ul className={s.card_list}>
                {achievementCards.map((card) => (
                    <li key={card.title}>
                        <Card
                            {...card}
                            withBorder
                            withBoxShadow
                            classes={{ container: s.card }}
                        />
                    </li>
                ))}
            </ul>
        </section>
    )
}
