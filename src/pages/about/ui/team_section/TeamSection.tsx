import { FC } from 'react'
import cn from 'classnames'
import { TextBox } from 'shared/ui/text_box'
import { teamCards } from '../../lib/teamCards.ts'
import { TeamCard } from './team_card/TeamCard.tsx'
import s from './TeamSection.module.scss'

type Props = {}

export const TeamSection: FC<Props> = () => {
    return (
        <section className={cn(s._, 'wrapper')}>
            <TextBox
                withStars
                title={'Meet the Estatein Team'}
                description={
                    'At Estatein, our success is driven by the dedication and expertise of our team. Get to know the people behind our mission to make your real estate dreams a reality.'
                }
            />

            <ul className={s.team_list}>
                {teamCards.map((person) => (
                    <li key={person.name}>
                        <TeamCard {...person} />
                    </li>
                ))}
            </ul>
        </section>
    )
}
