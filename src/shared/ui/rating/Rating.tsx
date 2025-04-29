import { FC } from 'react'
import cn from 'classnames'
import { Icon } from '../icon'
import s from './Rating.module.scss'

type Props = {
    rating: number
    length?: number
    className?: string
}

export const Rating: FC<Props> = ({ rating, length = 5, className }) => {
    return (
        <ul className={cn(s._, className)}>
            {Array.from({ length }).map((_, i) => (
                <li key={i} className={cn(s.star, rating > i && s._active)}>
                    <Icon.Star />
                </li>
            ))}
        </ul>
    )
}
