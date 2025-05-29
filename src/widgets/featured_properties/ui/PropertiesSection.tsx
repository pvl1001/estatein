import { FC } from 'react'
import {
    FeaturedCard,
    FeaturedCardSkeleton,
    useGetFeaturedQuery,
} from 'entities/featured'
import { Paths } from 'shared/lib/const'
import { SectionSlider } from 'shared/ui/section_slider'

export type Props = {
    title: string
    description: string
    buttonViewAllProps?: {
        to: Paths
        text: string
    }
}

export const PropertiesSection: FC<Props> = ({
    title,
    description,
    buttonViewAllProps,
}) => {
    const {
        data: featuredList = [],
        isLoading,
        isError,
    } = useGetFeaturedQuery()

    return (
        <SectionSlider
            isError={isError}
            isLoading={isLoading}
            title={title}
            description={description}
            skeletonComponent={<FeaturedCardSkeleton />}
            slideList={featuredList.map((item) => (
                <FeaturedCard {...item} />
            ))}
            buttonViewAllProps={buttonViewAllProps}
        />
    )
}
