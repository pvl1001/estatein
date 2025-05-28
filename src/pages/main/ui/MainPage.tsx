import { ClientSay } from './client_say/ClientSay.tsx'
import { Faq } from './faq/FAQ.tsx'
import { FeaturedProperties } from './featured_properties/FeaturedProperties.tsx'
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
