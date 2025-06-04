import { useTranslation } from 'react-i18next'
import { FC } from 'react'
import {
    ReviewCard,
    ReviewCardSkeleton,
    useGetReviewsQuery,
} from 'entities/review'
import { Ns, Paths } from 'shared/lib/const'
import { SectionSlider } from 'shared/ui/section_slider'

type Props = {}

export const ClientSay: FC<Props> = () => {
    const { t } = useTranslation([Ns.MAIN_PAGE])
    const { data: reviewList = [], isLoading, isError } = useGetReviewsQuery()

    return (
        <SectionSlider
            isError={isError}
            title={t('section.client.title', {
                postProcess: 'uppAll',
            })}
            description={t('section.client.description')}
            slideList={
                isLoading
                    ? Array(3).fill(ReviewCardSkeleton)
                    : reviewList.map((review) => <ReviewCard {...review} />)
            }
            buttonViewAllProps={{
                to: Paths.MAIN,
                text: t('section.client.view_all_button', {
                    postProcess: 'uppAll',
                }),
            }}
            sliderConfig={{
                speed: 1000,
                autoplay: {
                    delay: 5000,
                },
            }}
        />
    )
}
