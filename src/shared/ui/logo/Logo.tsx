import { FC } from 'react'
import cn from 'classnames'
import { Icon } from '../icon'
import s from './Logo.module.scss'

type Props = {
    className?: string
}

export const Logo: FC<Props> = ({ className }) => {
    return (
        <a href={'/'} className={cn(s._, className)}>
            <Icon.Logo />
        </a>
    )
}
