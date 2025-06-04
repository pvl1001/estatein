import { useTranslation } from 'react-i18next'
import { FC } from 'react'
import {
    PropertyCard,
    PropertyCardSkeleton,
    TPropertyItem,
} from 'entities/property'
import { Ns } from 'shared/lib/const'
import { SectionSlider } from 'shared/ui/section_slider'
import { usePropertyFilter } from '../../lib/usePropertyFilter'

export type Props = {
    isLoading: boolean
    isError: boolean
    propertyList: TPropertyItem[]
}

export const PropertiesSection: FC<Props> = ({
    isLoading,
    propertyList,
    isError,
}) => {
    const { t } = useTranslation([Ns.PROPERTIES_PAGE])
    const { filter } = usePropertyFilter()

    return (
        <SectionSlider
            isError={isError}
            title={t('section.properties.title', {
                postProcess: 'uppAll',
            })}
            description={t('section.properties.description')}
            slideList={
                isLoading
                    ? Array(3).fill(PropertyCardSkeleton)
                    : filter(propertyList).map((item) => (
                          <PropertyCard
                              img={item.img}
                              name={item.name}
                              price={item.price}
                              description={item.description}
                              category={item.category}
                          />
                      ))
            }
        />
    )
}
