import { FC } from 'react'
import { FaqCard, TFaq } from 'entities/faq_card'
import { Paths } from 'shared/lib/const'
import { SectionSlider } from 'shared/ui/section_slider'

type Props = {
    faqList: TFaq[]
}

export const Faq: FC<Props> = ({ faqList }) => {
    return (
        <SectionSlider
            title={'Frequently Asked Questions'}
            description={
                "Find answers to common questions about Estatein's services, property listings, and the real estate process. We're here to provide clarity and assist you every step of the way."
            }
            slideList={faqList.map((faq) => (
                <FaqCard {...faq} />
            ))}
            buttonViewAllProps={{
                to: Paths.MAIN,
                name: "View All FAQ's",
            }}
        />
    )
}
