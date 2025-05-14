import { useTranslation } from 'react-i18next'
import { FC } from 'react'
import cn from 'classnames'
import { TextBox } from 'shared/ui/text_box'
import { teamCards } from '../../lib/teamCards.ts'
import { TeamCard } from './team_card/TeamCard.tsx'
import s from './TeamSection.module.scss'

type Props = {}

export const TeamSection: FC<Props> = () => {
    const { t } = useTranslation(['aboutPage'])

    return (
        <section className={cn(s._, 'wrapper')}>
            <TextBox
                withStars
                title={t('section.team.title', { postProcess: 'uppAll' })}
                description={t('section.team.description')}
            />

            <ul className={s.team_list}>
                {teamCards.map(({ positionKey, ...person }) => (
                    <li key={person.name}>
                        <TeamCard
                            position={t(
                                `section.team.position.${positionKey}`,
                                { postProcess: 'uppAll' }
                            )}
                            {...person}
                        />
                    </li>
                ))}
            </ul>
        </section>
    )
}
