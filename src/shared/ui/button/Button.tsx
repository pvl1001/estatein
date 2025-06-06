import { ComponentProps, FC } from 'react'
import { Link } from 'react-router'
import cn from 'classnames'
import { usePostProcessUppAll } from '../../lib/hooks'
import { Loader } from '../loader'
import s from './Button.module.scss'

type Props = ComponentProps<'button'> & {
    theme?: 'default' | 'link' | 'primary' | 'dark'
    to?: string
    isLoading?: boolean
}

export const Button: FC<Props> = ({
    className,
    theme = 'default',
    to,
    isLoading,
    ...props
}) => {
    const buttonClassName = cn(s._, s[`_${theme}`], isLoading && s._loading)

    props = {
        ...props,
        children: usePostProcessUppAll(props.children),
        disabled: isLoading ? isLoading : props.disabled,
    }

    return to ? (
        <Link to={to} className={cn(s.link, className)}>
            <button {...props} className={buttonClassName} />
        </Link>
    ) : (
        <button {...props} className={cn(buttonClassName, className)}>
            {props.children}
            {isLoading && <Loader className={s.loader} />}
        </button>
    )
}
