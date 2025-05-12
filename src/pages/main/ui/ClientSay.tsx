import { useTranslation } from 'react-i18next'
import { FC } from 'react'
import {
    ReviewCard,
    ReviewCardSkeleton,
    useGetReviewsQuery,
} from 'entities/review'
import { Paths } from 'shared/lib/const'
import { SectionSlider } from 'shared/ui/section_slider'

type Props = {}

export const ClientSay: FC<Props> = () => {
    const { t } = useTranslation()
    const { data: reviewList = [], isLoading, isError } = useGetReviewsQuery()

    return (
        <SectionSlider
            isLoading={isLoading}
            isError={isError}
            title={t('page.main.section.client.title', {
                postProcess: 'uppAll',
            })}
            description={t('page.main.section.client.description')}
            skeletonComponent={<ReviewCardSkeleton />}
            slideList={reviewList.map((review) => (
                <ReviewCard {...review} />
            ))}
            buttonViewAllProps={{
                to: Paths.MAIN,
                text: t('page.main.section.client.view_all_button', {
                    postProcess: 'uppAll',
                }),
            }}
        />
    )
}
