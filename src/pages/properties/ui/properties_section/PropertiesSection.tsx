import { useTranslation } from 'react-i18next'
import { FC } from 'react'
import {
    PropertyCard,
    PropertyCardSkeleton,
    useGetPropertyQuery,
} from 'entities/property'
import { Ns } from 'shared/lib/const'
import { SectionSlider } from 'shared/ui/section_slider'
import { usePropertyFilter } from '../../lib/usePropertyFilter'

export type Props = {}

export const PropertiesSection: FC<Props> = () => {
    const { t } = useTranslation([Ns.PROPERTIES_PAGE])
    const { filter } = usePropertyFilter()
    const {
        data: propertyList = [],
        isLoading,
        isError,
    } = useGetPropertyQuery()

    return (
        <SectionSlider
            isError={isError}
            isLoading={isLoading}
            title={t('section.properties.title', {
                postProcess: 'uppAll',
            })}
            description={t('section.properties.description')}
            skeletonComponent={<PropertyCardSkeleton />}
            slideList={filter(propertyList).map((item) => (
                <PropertyCard
                    img={item.img}
                    name={item.name}
                    price={item.price}
                    description={item.description}
                    category={item.category}
                />
            ))}
        />
    )
}
