import { Faq } from 'widgets/faq'
import { ClientSay } from './client_say/ClientSay.tsx'
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
