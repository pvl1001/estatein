import { FC } from 'react'
import cn from 'classnames'
import { Card } from 'shared/ui/card'
import { TextBox } from 'shared/ui/text_box'
import { experienceCards } from '../../lib/experienceCards.ts'
import s from './ExperienceSection.module.scss'

type Props = {}

export const ExperienceSection: FC<Props> = () => {
    return (
        <section className={cn(s._, 'wrapper')}>
            <TextBox
                title={'Navigating the Estatein Experience'}
                description={
                    "At Estatein, we've designed a straightforward process to help you find and purchase your dream property with ease. Here's a step-by-step guide to how it all works."
                }
            />

            <ul className={s.card_list}>
                {experienceCards.map((card, i) => (
                    <li key={card.title}>
                        <div className={s.card__header}>
                            Step {String(++i).padStart(2, '0')}
                        </div>
                        <Card
                            {...card}
                            withBorder
                            classes={{
                                container: s.card,
                                topContainer: s.card_top_container,
                            }}
                        />
                    </li>
                ))}
            </ul>
        </section>
    )
}
