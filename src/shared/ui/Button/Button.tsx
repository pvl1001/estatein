import { ComponentProps, FC } from 'react'
import cn from 'classnames'
import s from './Button.module.scss'

type Props = ComponentProps<'button'> & {
    theme?: 'default' | 'link'
}

export const Button: FC<Props> = ({
    className,
    theme = 'default',
    ...props
}) => {
    return <button {...props} className={cn(s._, className, s[`_${theme}`])} />
}
