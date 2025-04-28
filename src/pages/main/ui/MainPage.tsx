import { useEffect, useState } from 'react'
import { TFeaturedItem } from 'entities/featured_card'
import { getFeatureds } from '../model/api/getFeatureds'
import { FeaturedProperties } from './featured_properties/FeaturedProperties'
import { HeadSection } from './head_section/HeadSection'

export const MainPage = () => {
    const [featuredList, setFeaturedList] = useState<TFeaturedItem[]>([])

    useEffect(() => {
        getFeatureds().then(setFeaturedList)
    }, [])

    return (
        <>
            <HeadSection />
            <FeaturedProperties featuredList={featuredList} />
        </>
    )
}
