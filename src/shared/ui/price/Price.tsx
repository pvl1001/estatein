import { useTranslation } from 'react-i18next'
import { FC, PropsWithChildren } from 'react'
import cn from 'classnames'
import s from './Price.module.scss'

type Props = PropsWithChildren<{
    children: number
    className?: string
}>

export const Price: FC<Props> = ({ children: price, className }) => {
    const { t } = useTranslation()
    return (
        <div className={cn(s._, className)}>
            <span className={s.price_title}>
                {t('price', { postProcess: 'uppFirst' })}
            </span>
            <span className={s.price}>{price.toCurrency()}</span>
        </div>
    )
}
