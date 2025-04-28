import { FC } from 'react'
import cn from 'classnames'
import { Icon } from '../icon'
import { Text } from '../text'
import s from './TextBox.module.scss'

type Props = {
    title: string
    description: string
    className?: string
    withStars?: boolean
}

export const TextBox: FC<Props> = ({
    className,
    title,
    description,
    withStars,
}) => {
    return (
        <div className={cn(s._, className)}>
            {withStars && <Icon.Stars className={s.stars_icon} />}
            <Text.Title>{title}</Text.Title>
            <Text.Description>{description}</Text.Description>
        </div>
    )
}
