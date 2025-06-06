import { ComponentProps, FC, ReactNode } from 'react'
import cn from 'classnames'
import { Icon } from '../../icon'
import { Text } from '../../text'
import s from './Checkbox.module.scss'

type Props = ComponentProps<'input'> & {
    message?: ReactNode
    error?: boolean
}

export const Checkbox: FC<Props> = ({
    className,
    message,
    error,
    ...props
}) => {
    return (
        <div className={cn(s._, className, error && s._error)}>
            <label>
                <input type="checkbox" {...props} />
                <div>
                    <Icon.Check />
                </div>
            </label>
            {message && <Text.Description as={'p'}>{message}</Text.Description>}
        </div>
    )
}
