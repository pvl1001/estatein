import { useTranslation } from 'react-i18next'
import { PropertiesSection } from 'widgets/featured_properties'
import { Ns } from 'shared/lib/const'
import { PropertyHead } from './property_head/PropertyHead.tsx'

export const PropertiesPage = () => {
    const { t } = useTranslation([Ns.PROPERTIES_PAGE])

    return (
        <>
            <PropertyHead />
            <PropertiesSection
                title={t('section.properties.title', {
                    postProcess: 'uppAll',
                })}
                description={t('section.properties.description')}
            />
        </>
    )
}
