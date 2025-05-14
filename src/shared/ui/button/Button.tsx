import { ComponentProps, FC } from 'react'
import { Link } from 'react-router'
import cn from 'classnames'
import { usePostProcessUppAll } from '../../lib/hooks'
import s from './Button.module.scss'

type Props = ComponentProps<'button'> & {
    theme?: 'default' | 'link' | 'primary' | 'dark'
    to?: string
}

export const Button: FC<Props> = ({
    className,
    theme = 'default',
    to,
    ...props
}) => {
    const buttonClassName = cn(s._, s[`_${theme}`])
    props.children = usePostProcessUppAll(props.children)

    return to ? (
        <Link to={to} className={cn(s.link, className)}>
            <button {...props} className={buttonClassName} />
        </Link>
    ) : (
        <button {...props} className={cn(buttonClassName, className)} />
    )
}
