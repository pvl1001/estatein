import { useTranslation } from 'react-i18next'
import { FC } from 'react'
import {
    FeaturedCard,
    FeaturedCardSkeleton,
    useGetFeaturedQuery,
} from 'entities/featured'
import { Ns, Paths } from 'shared/lib/const'
import { SectionSlider } from 'shared/ui/section_slider'

type Props = {}

export const FeaturedProperties: FC<Props> = () => {
    const { t } = useTranslation([Ns.MAIN_PAGE])
    const {
        data: featuredList = [],
        isLoading,
        isError,
    } = useGetFeaturedQuery()

    return (
        <SectionSlider
            isError={isError}
            isLoading={isLoading}
            title={t('section.featured.title', {
                postProcess: 'uppAll',
            })}
            description={t('section.featured.description')}
            skeletonComponent={<FeaturedCardSkeleton />}
            slideList={featuredList.map((item) => (
                <FeaturedCard {...item} />
            ))}
            buttonViewAllProps={{
                to: Paths.MAIN,
                text: t('section.featured.view_all_button', {
                    postProcess: 'uppAll',
                }),
            }}
        />
    )
}
