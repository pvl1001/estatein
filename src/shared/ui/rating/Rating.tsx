import { FC } from 'react'
import cn from 'classnames'
import { Icon } from '../icon'
import { Skeleton } from '../skeleton'
import s from './Rating.module.scss'

type Props = {
    rating: number
    length?: number
    className?: string
    skeleton?: boolean
}

export const Rating: FC<Props> = ({
    rating,
    length = 5,
    className,
    skeleton,
}) => {
    return (
        <ul className={cn(s._, className)}>
            {Array.from({ length }).map((_, i) => (
                <li key={i} className={cn(s.star, rating > i && s._active)}>
                    {skeleton ? (
                        <Skeleton>
                            <Icon.Star />
                        </Skeleton>
                    ) : (
                        <Icon.Star />
                    )}
                </li>
            ))}
        </ul>
    )
}
