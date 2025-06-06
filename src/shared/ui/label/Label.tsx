import { FC, PropsWithChildren } from 'react'
import cn from 'classnames'
import s from './Label.module.scss'

type Props = React.ComponentProps<'label'> & PropsWithChildren

export const Label: FC<Props> = ({ children, className, ...props }) => {
    return (
        <label className={cn(s._, className)} {...props}>
            {children}
        </label>
    )
}
