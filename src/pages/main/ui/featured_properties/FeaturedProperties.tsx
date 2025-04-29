import { FC } from 'react'
import { FeaturedCard, useGetFeaturedQuery } from 'entities/featured'
import { Paths } from 'shared/lib/const'
import { SectionSlider } from 'shared/ui/section_slider'

type Props = {}

export const FeaturedProperties: FC<Props> = () => {
    const {
        data: featuredList = [],
        isLoading,
        isError,
    } = useGetFeaturedQuery()

    return (
        <SectionSlider
            isError={isError}
            isLoading={isLoading}
            title={'Featured Properties'}
            description={
                'Explore our handpicked selection of featured properties. Each listing offers a glimpse into exceptional homes and investments available through Estatein.'
            }
            slideList={featuredList.map((item) => (
                <FeaturedCard {...item} />
            ))}
            buttonViewAllProps={{
                to: Paths.MAIN,
                name: 'View All Properties',
            }}
        />
    )
}
