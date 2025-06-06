import { FC } from 'react'
import cn from 'classnames'
import { OrderForm } from 'features/order_form'
import { TextBox } from 'shared/ui/text_box'
import s from './PropertyFormSection.module.scss'

type Props = {}

export const PropertyFormSection: FC<Props> = () => {
    return (
        <section className={cn(s._, 'wrapper')}>
            <TextBox
                withStars
                title={"Let's Make it Happen"}
                description={
                    "Ready to take the first step toward your dream property? Fill out the form below, and our real estate wizards will work their magic to find your perfect match. Don't wait; let's embark on this exciting journey together."
                }
            />
            <OrderForm />
        </section>
    )
}
