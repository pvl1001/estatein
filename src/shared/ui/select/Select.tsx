import { useTranslation } from 'react-i18next'
import { FC, ReactNode, useState } from 'react'
import cn from 'classnames'
import { Icon } from '../icon'
import { TextField } from '../text_field'
import { TextFieldProps } from '../text_field/TextField.tsx'
import s from './Select.module.scss'

export type Option = {
    title: string | number
    value: string | number
}

type Props = Omit<TextFieldProps, 'onChange'> & {
    options: Option[]
    icon?: ReactNode
    onChange?: (value: Option['value']) => void
}

export const Select: FC<Props> = ({
    options,
    icon,
    onChange,
    className,
    label,
    ...inputProps
}) => {
    const { t } = useTranslation()
    const [isShowOptionList, setIsShowOptionList] = useState(false)
    const title: Option['title'] =
        options.find((o) => o.value === inputProps.value)?.title ?? ''

    function openOptionList() {
        setIsShowOptionList(true)
    }

    function closeOptionList() {
        setIsShowOptionList(false)
    }

    function clickOption(option?: Option) {
        onChange?.(option?.value ?? '')
        closeOptionList()
    }

    return (
        <div className={cn(s._, className)}>
            {isShowOptionList && (
                <div className={s.overlay} onClick={closeOptionList} />
            )}
            <TextField
                readOnly
                className={s.input}
                label={label}
                icon={icon && <div className={s.icon}>{icon}</div>}
                onClick={openOptionList}
                button={
                    <button
                        type={'button'}
                        className={s.arrow}
                        onClick={openOptionList}
                        style={isShowOptionList ? { rotate: '180deg' } : {}}
                    >
                        <Icon.ArrowVector />
                    </button>
                }
                {...inputProps}
                value={title}
            />

            {isShowOptionList && (
                <ul className={s.option_list}>
                    <li
                        onClick={() => clickOption()}
                        className={cn(s.option, s._empty)}
                    >
                        {t('empty')}
                    </li>
                    {options.map((option) => (
                        <li
                            key={option.title}
                            className={s.option}
                            onClick={() => clickOption(option)}
                        >
                            {option.title}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}
