import { useTranslation } from 'react-i18next'
import { PropertiesSection } from 'widgets/featured_properties'
import { Ns, Paths } from 'shared/lib/const'
import { ClientSay } from './client_say/ClientSay.tsx'
import { Faq } from './faq/FAQ.tsx'
import { HeadSection } from './head_section/HeadSection'

export const MainPage = () => {
    const { t } = useTranslation([Ns.MAIN_PAGE])
    return (
        <>
            <HeadSection />
            <PropertiesSection
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
            />
            <ClientSay />
            <Faq />
        </>
    )
}
