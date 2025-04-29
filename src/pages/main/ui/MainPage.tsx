import { useEffect, useState } from 'react'
import { ClientReview } from 'entities/client_say_card'
import { TFaq } from 'entities/faq_card'
import { TFeaturedItem } from 'entities/featured_card'
import { getFaqs } from '../model/api/getFaqs'
import { getFeatureds } from '../model/api/getFeatureds'
import { getReviews } from '../model/api/getReviews'
import { ClientSay } from './client_say/ClientSay'
import { Faq } from './faq/FAQ'
import { FeaturedProperties } from './featured_properties/FeaturedProperties'
import { HeadSection } from './head_section/HeadSection'

export const MainPage = () => {
    const [featuredList, setFeaturedList] = useState<TFeaturedItem[]>([])
    const [reviewList, setReviewList] = useState<ClientReview[]>([])
    const [faqList, setFaqList] = useState<TFaq[]>([])

    useEffect(() => {
        getFeatureds().then(setFeaturedList)
        getReviews().then(setReviewList)
        getFaqs().then(setFaqList)
    }, [])

    return (
        <>
            <HeadSection />
            <FeaturedProperties featuredList={featuredList} />
            <ClientSay reviewList={reviewList} />
            <Faq faqList={faqList} />
        </>
    )
}
