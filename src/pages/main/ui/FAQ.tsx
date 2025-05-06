import { FC } from 'react'
import { FaqCard, FaqCardSkeleton, useGetFaqQuery } from 'entities/faq'
import { Paths } from 'shared/lib/const'
import { SectionSlider } from 'shared/ui/section_slider'

type Props = {}

export const Faq: FC<Props> = () => {
    const { data: faqList = [], isLoading, isError } = useGetFaqQuery()

    return (
        <SectionSlider
            isLoading={isLoading}
            isError={isError}
            title={'Frequently Asked Questions'}
            description={
                "Find answers to common questions about Estatein's services, property listings, and the real estate process. We're here to provide clarity and assist you every step of the way."
            }
            skeletonComponent={<FaqCardSkeleton />}
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
