import { FC, PropsWithChildren } from 'react'
import cn from 'classnames'
import { Label } from '../label'
import s from './TextArea.module.scss'

type Props = React.ComponentProps<'textarea'> &
    PropsWithChildren<{
        label?: string
        theme?: 'default' | 'grey'
    }>

export const TextArea: FC<Props> = ({
    children,
    className,
    label,
    theme = 'default',
    ...props
}) => {
    return (
        <div className={cn(s._, className)}>
            {label && <Label>{label}</Label>}
            <div className={cn(s.wrapper, theme && s[`_${theme}`])}>
                <textarea {...props}>{children}</textarea>
            </div>
        </div>
    )
}
