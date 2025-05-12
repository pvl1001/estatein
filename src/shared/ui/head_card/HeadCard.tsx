import { useTranslation } from 'react-i18next'
import { FC } from 'react'
import { Link } from 'react-router'
import { Icon } from '../icon'
import { THeadCard } from './types.ts'
import s from './HeadCard.module.scss'

type Props = THeadCard

export const HeadCard: FC<Props> = ({ icon, textKey }) => {
    const { t } = useTranslation()
    return (
        <Link to={'/'} className={s._}>
            <article className={s.container}>
                <div className={s.icon}>{icon}</div>
                <span className={s.text}>
                    {t(`head_card.${textKey}`, { postProcess: 'uppAll' })}
                </span>
                <Icon.ArrowLight className={s.arrow_icon} />
            </article>
        </Link>
    )
}
