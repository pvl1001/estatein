import { useTranslation } from 'react-i18next'
import { FC } from 'react'
import cn from 'classnames'
import { Card } from 'shared/ui/card'
import { TextBox } from 'shared/ui/text_box'
import { experienceCards } from '../../lib/experienceCards.ts'
import s from './ExperienceSection.module.scss'

type Props = {}

export const ExperienceSection: FC<Props> = () => {
    const { t } = useTranslation(['aboutPage', 'translation'])

    return (
        <section className={cn(s._, 'wrapper')}>
            <TextBox
                title={t('section.experience.title', { postProcess: 'uppAll' })}
                description={t('section.experience.description')}
            />

            <ul className={s.card_list}>
                {experienceCards.map(({ textKey }, i) => (
                    <li key={textKey}>
                        <div className={s.card__header}>
                            {t('translation:step', { postProcess: 'uppFirst' })}{' '}
                            {String(++i).padStart(2, '0')}
                        </div>
                        <Card
                            title={t(
                                `section.experience.card.${textKey}.title`,
                                { postProcess: 'uppAll' }
                            )}
                            description={t(
                                `section.experience.card.${textKey}.description`
                            )}
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
