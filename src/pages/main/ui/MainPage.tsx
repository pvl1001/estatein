import { ClientSay } from './ClientSay.tsx'
import { Faq } from './FAQ.tsx'
import { FeaturedProperties } from './FeaturedProperties.tsx'
import { HeadSection } from './head_section/HeadSection'

export const MainPage = () => {
    return (
        <>
            <HeadSection />
            <FeaturedProperties />
            <ClientSay />
            <Faq />
        </>
    )
}
