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
    const { data: reviewList = [], isLoading, isError } = useGetReviewsQuery()

    return (
        <SectionSlider
            isLoading={isLoading}
            isError={isError}
            title={'What Our Clients Say'}
            description={
                'Explore our handpicked selection of featured properties. Each listing offers a glimpse into exceptional homes and investments available through Estatein.'
            }
            skeletonComponent={<ReviewCardSkeleton />}
            slideList={reviewList.map((review) => (
                <ReviewCard {...review} />
            ))}
            buttonViewAllProps={{
                to: Paths.MAIN,
                name: 'View All Testimonials',
            }}
        />
    )
}
