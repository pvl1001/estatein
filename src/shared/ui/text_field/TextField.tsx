import { ComponentProps, FC, ReactNode } from 'react'
import cn from 'classnames'
import s from './TextField.module.scss'

type Props = {
    icon?: ReactNode
    buttonIcon?: ReactNode
    inputProps?: ComponentProps<'input'>
    className?: string
}

export const TextField: FC<Props> = ({
    icon,
    buttonIcon,
    inputProps,
    className,
}) => {
    return (
        <label className={cn(s._, className)}>
            {icon && <span className={s.icon}>{icon}</span>}

            <input type="text" {...inputProps} />

            {buttonIcon && (
                <button type={'submit'} className={s.send_button}>
                    {buttonIcon}
                </button>
            )}
        </label>
    )
}
