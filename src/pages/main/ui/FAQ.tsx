import { useTranslation } from 'react-i18next'
import { FC } from 'react'
import { FaqCard, FaqCardSkeleton, useGetFaqQuery } from 'entities/faq'
import { Paths } from 'shared/lib/const'
import { SectionSlider } from 'shared/ui/section_slider'

type Props = {}

export const Faq: FC<Props> = () => {
    const { t } = useTranslation()
    const { data: faqList = [], isLoading, isError } = useGetFaqQuery()

    return (
        <SectionSlider
            isLoading={isLoading}
            isError={isError}
            title={t('page.main.section.faq.title', {
                postProcess: 'uppAll',
            })}
            description={t('page.main.section.faq.description')}
            skeletonComponent={<FaqCardSkeleton />}
            slideList={faqList.map((faq) => (
                <FaqCard {...faq} />
            ))}
            buttonViewAllProps={{
                to: Paths.MAIN,
                text: t('page.main.section.faq.view_all_button', {
                    postProcess: 'uppAll',
                }),
            }}
        />
    )
}
