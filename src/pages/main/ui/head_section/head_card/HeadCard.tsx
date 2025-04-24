import { FC } from 'react'
import { Link } from 'react-router'
import ArrowIcon from '../icons/arrow.svg?react'
import { THeadCard } from '../lib/headCards'
import s from './HeadCard.module.scss'

type Props = THeadCard

export const HeadCard: FC<Props> = ({ icon, text }) => {
    return (
        <Link to={'/'} className={s._}>
            <article className={s.container}>
                <div className={s.icon}>{icon}</div>
                <span className={s.text}>{text}</span>
                <ArrowIcon className={s.arrow_icon} />
            </article>
        </Link>
    )
}
