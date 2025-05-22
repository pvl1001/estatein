import { UseFormRegisterReturn } from 'react-hook-form'
import { ComponentProps, ReactNode } from 'react'
import cn from 'classnames'
import { Loader } from '../loader/Loader.tsx'
import { Text } from '../text'
import s from './TextField.module.scss'

type Props = {
    icon?: ReactNode
    buttonIcon?: ReactNode
    inputProps?: ComponentProps<'input'>
    className?: string
    register: UseFormRegisterReturn
    error?: string
    message?: string
    pending?: boolean
}

export const TextField = ({
    icon,
    buttonIcon,
    inputProps,
    className,
    register,
    error,
    message,
    pending,
}: Props) => {
    return (
        <>
            <label className={cn(s._, className)}>
                {icon && <span className={s.icon}>{icon}</span>}

                <input {...register} {...inputProps} disabled={pending} />

                {buttonIcon && (
                    <button
                        type={'submit'}
                        className={s.send_button}
                        disabled={pending}
                    >
                        {pending ? <Loader /> : buttonIcon}
                    </button>
                )}
            </label>
            {(error || message) && (
                <Text.Description className={s.message}>
                    {error || message}
                </Text.Description>
            )}
        </>
    )
}
