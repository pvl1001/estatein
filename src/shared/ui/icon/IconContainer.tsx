import { FC, PropsWithChildren } from 'react'
import cn from 'classnames'
import s from './IconContainer.module.scss'

type Props = PropsWithChildren<{
    className?: string
}>

export const IconContainer: FC<Props> = ({ children, className }) => {
    return <div className={cn(s._, className)}>{children}</div>
}
