import { useEffect, useState } from 'react'
import { ClientReview } from 'entities/client_say_card'
import { TFeaturedItem } from 'entities/featured_card'
import { getFeatureds } from '../model/api/getFeatureds'
import { getReviews } from '../model/api/getReviews'
import { ClientSay } from './client_say/ClientSay'
import { FeaturedProperties } from './featured_properties/FeaturedProperties'
import { HeadSection } from './head_section/HeadSection'

export const MainPage = () => {
    const [featuredList, setFeaturedList] = useState<TFeaturedItem[]>([])
    const [reviewList, setReviewList] = useState<ClientReview[]>([])

    useEffect(() => {
        getFeatureds().then(setFeaturedList)
        getReviews().then(setReviewList)
    }, [])

    return (
        <>
            <HeadSection />
            <FeaturedProperties featuredList={featuredList} />
            <ClientSay reviewList={reviewList} />
        </>
    )
}
