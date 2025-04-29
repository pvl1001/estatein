import { ClientSay } from './client_say/ClientSay'
import { Faq } from './faq/FAQ'
import { FeaturedProperties } from './featured_properties/FeaturedProperties'
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
