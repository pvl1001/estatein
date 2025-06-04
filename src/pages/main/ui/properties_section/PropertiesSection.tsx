import { useTranslation } from 'react-i18next'
import { FC } from 'react'
import {
    PropertyCard,
    PropertyCardSkeleton,
    useGetPropertyQuery,
} from 'entities/property'
import { Ns, Paths } from 'shared/lib/const'
import { SectionSlider } from 'shared/ui/section_slider'

export type Props = {}

export const PropertiesSection: FC<Props> = () => {
    const { t } = useTranslation([Ns.MAIN_PAGE])
    const { data = [], isLoading, isError } = useGetPropertyQuery()
    const propertyList = data.filter((p) => p.isFeatured)

    return (
        <SectionSlider
            isError={isError}
            title={t('section.properties.title', {
                postProcess: 'uppAll',
            })}
            description={t('section.properties.description')}
            buttonViewAllProps={{
                to: Paths.MAIN,
                text: t('section.properties.view_all_button', {
                    postProcess: 'uppAll',
                }),
            }}
            slideList={
                isLoading
                    ? Array(3).fill(PropertyCardSkeleton)
                    : propertyList.map((item) => (
                          <PropertyCard
                              img={item.img}
                              type={item.type}
                              bathroomCount={item.bathroomCount}
                              bedroomCount={item.bedroomCount}
                              name={item.name}
                              price={item.price}
                              description={item.description}
                          />
                      ))
            }
        />
    )
}
