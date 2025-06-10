import { ComponentProps, FC, ReactNode, useId } from 'react'
import cn from 'classnames'
import { TestId } from '../../lib/const'
import { Label } from '../label'
import s from './TextField.module.scss'

export type TextFieldProps = ComponentProps<'input'> & {
    label?: string
    error?: string
    theme?: 'default' | 'grey'
    wrapperClassName?: string
    icon?: ReactNode
    button?: ReactNode
}

export const TextField: FC<TextFieldProps> = ({
    label,
    icon,
    button,
    error,
    theme = 'default',
    className,
    wrapperClassName,
    ...inputProps
}) => {
    const id = useId()
    return (
        <div
            className={cn(s._, className, error && s._error)}
            data-testid={TestId.TEXT_FIELD}
        >
            {label && (
                <Label htmlFor={`${inputProps.name}_${id}`}>{label}</Label>
            )}

            <div
                className={cn(
                    s.wrapper,
                    wrapperClassName,
                    theme && s[`_${theme}`]
                )}
            >
                {icon && <div className={s.icon}>{icon}</div>}
                <input
                    type="text"
                    id={`${inputProps.name}_${id}`}
                    {...inputProps}
                />
                {button}
            </div>

            {error && <p className={s.message}>{error}</p>}
        </div>
    )
}
