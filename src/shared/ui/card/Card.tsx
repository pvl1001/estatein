import { FC } from 'react'
import cn from 'classnames'
import { TCard } from '../../lib/types.ts'
import { Text } from '../text'
import s from './Card.module.scss'

type Props = TCard & {
    classes?: Partial<{
        container: string
        topContainer: string
        icon: string
    }>
}

export const Card: FC<Props> = ({ icon, title, description, classes }) => {
    return (
        <article className={cn(s._, classes?.container)}>
            <div className={cn(s.top_container, classes?.topContainer)}>
                {icon && (
                    <div className={cn(s.icon, classes?.icon)}>{icon}</div>
                )}
                <Text.Title as={'h5'}>{title}</Text.Title>
            </div>
            <Text.Description>{description}</Text.Description>
        </article>
    )
}
