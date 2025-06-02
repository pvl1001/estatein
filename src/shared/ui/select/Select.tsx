import { ComponentProps, FC, ReactNode, useRef, useState } from 'react'
import cn from 'classnames'
import { Icon } from '../icon'
import s from './Select.module.scss'

type Option = {
    value: string
    title: string
}

type Props = Omit<ComponentProps<'input'>, 'onChange'> & {
    icon?: ReactNode
    options?: Option[]
    onChange?: (value: string) => void
}

const testOptions: Option[] = [
    {
        title: 'option 1',
        value: 'option 1',
    },
    {
        title: 'option 2',
        value: 'option 2',
    },
]

export const Select: FC<Props> = ({
    options = testOptions,
    icon,
    onChange,
    ...inputProps
}) => {
    const [currentOption, setCurrentOption] = useState<Option>()
    const [isShowOptionList, setIsShowOptionList] = useState(false)
    const ref = useRef(null)

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

    return (
        <div className={s._}>
            {isShowOptionList && (
                <div className={s.overlay} onClick={closeOptionList} />
            )}
            <div className={s.select} ref={ref}>
                {icon && <div className={s.icon}>{icon}</div>}

                <input
                    type="text"
                    placeholder={'test'}
                    readOnly
                    onClick={openOptionList}
                    defaultValue={currentOption?.title}
                    {...inputProps}
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
