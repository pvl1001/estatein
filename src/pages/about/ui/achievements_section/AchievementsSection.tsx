import { useTranslation } from 'react-i18next'
import { FC } from 'react'
import cn from 'classnames'
import { Card } from 'shared/ui/card'
import { TextBox } from 'shared/ui/text_box'
import { achievementCards } from '../../lib/achievementCards.ts'
import s from './AchievementsSection.module.scss'

type Props = {}

export const AchievementsSection: FC<Props> = () => {
    const { t } = useTranslation(['aboutPage'])

    return (
        <section className={cn(s._, 'wrapper')}>
            <TextBox
                withStars
                title={t('section.achievements.title', {
                    postProcess: 'uppAll',
                })}
                description={t('section.achievements.description')}
            />

            <ul className={s.card_list}>
                {achievementCards.map(({ textKey }) => (
                    <li key={textKey}>
                        <Card
                            title={t(
                                `section.achievements.card.${textKey}.title`,
                                { postProcess: 'uppAll' }
                            )}
                            description={t(
                                `section.achievements.card.${textKey}.description`
                            )}
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
