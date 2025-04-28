import { FC } from 'react'
import { FeaturedCard, TFeaturedItem } from 'entities/featured_card'
import { Paths } from 'shared/lib/const'
import { SectionSlider } from 'shared/ui/section_slider'

type Props = {
    featuredList: TFeaturedItem[]
}

export const FeaturedProperties: FC<Props> = ({ featuredList }) => {
    return (
        <SectionSlider
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
