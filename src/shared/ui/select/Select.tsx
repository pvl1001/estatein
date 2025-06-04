import { ComponentProps, FC, ReactNode, useState } from 'react'
import cn from 'classnames'
import { Icon } from '../icon'
import s from './Select.module.scss'

export type Option = {
    title: string | number
    value: string | number
}

type Props = Omit<ComponentProps<'input'>, 'onChange'> & {
    options: Option[]
    icon?: ReactNode
    onChange?: (value: Option['value']) => void
    className?: string
}

export const Select: FC<Props> = ({
    options,
    icon,
    onChange,
    className,
    ...inputProps
}) => {
    const [currentOption, setCurrentOption] = useState<Option>()
    const [isShowOptionList, setIsShowOptionList] = useState(false)

    function openOptionList() {
        setIsShowOptionList(true)
    }

    function closeOptionList() {
        setIsShowOptionList(false)
    }

    function clickOption(option?: Option) {
        onChange?.(option?.value ?? '')
        setCurrentOption(option)
        closeOptionList()
    }

    const getDefaultTitle = options.find((o) => o.value === inputProps.value)
    const defaultValue = currentOption?.title ?? getDefaultTitle?.title ?? ''

    return (
        <div className={cn(s._, className)}>
            {isShowOptionList && (
                <div className={s.overlay} onClick={closeOptionList} />
            )}
            <div className={s.select}>
                {icon && <div className={s.icon}>{icon}</div>}

                <input
                    type="text"
                    readOnly
                    onClick={openOptionList}
                    {...inputProps}
                    value={defaultValue}
                />

                <button
                    type={'button'}
                    className={s.arrow}
                    onClick={openOptionList}
                    style={isShowOptionList ? { rotate: '180deg' } : {}}
                >
                    <Icon.ArrowVector />
                </button>
            </div>

            {isShowOptionList && (
                <ul className={s.option_list}>
                    <li
                        onClick={() => clickOption()}
                        className={cn(s.option, s._empty)}
                    >
                        empty
                    </li>
                    {options.length ? (
                        options.map((option) => (
                            <li
                                key={option.title}
                                className={s.option}
                                onClick={() => clickOption(option)}
                            >
                                {option.title}
                            </li>
                        ))
                    ) : (
                        <p className={s.option}>Список пуст</p>
                    )}
                </ul>
            )}
        </div>
    )
}
