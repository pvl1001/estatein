import { useTranslation } from 'react-i18next'
import { FC } from 'react'
import cn from 'classnames'
import { OrderForm } from 'features/order_form'
import { Ns } from 'shared/lib/const'
import { TextBox } from 'shared/ui/text_box'
import s from './PropertyFormSection.module.scss'

type Props = {}

export const PropertyFormSection: FC<Props> = () => {
    const { t } = useTranslation([Ns.PROPERTIES_PAGE])

    return (
        <section className={cn(s._, 'wrapper')}>
            <TextBox
                withStars
                title={t('section.order_form.title', { postProcess: 'uppAll' })}
                description={t('section.order_form.description', {
                    postProcess: 'uppFirst',
                })}
            />
            <OrderForm />
        </section>
    )
}
