import { ClientSay } from './client_say/ClientSay.tsx'
import { Faq } from './faq/FAQ.tsx'
import { HeadSection } from './head_section/HeadSection'
import { PropertiesSection } from './properties_section/PropertiesSection'

export const MainPage = () => {
    return (
        <>
            <HeadSection />
            <PropertiesSection />
            <ClientSay />
            <Faq />
        </>
    )
}
