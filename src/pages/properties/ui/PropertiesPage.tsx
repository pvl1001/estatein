import { PropertySearch } from 'features/search_property'
import { useGetAllPropertiesQuery } from 'entities/property'
import { PropertyFormSection } from './form_section/PropertyFormSection.tsx'
import { PropertiesSection } from './properties_section/PropertiesSection'
import { PropertyHead } from './property_head/PropertyHead.tsx'
import s from './PropertiesPage.module.scss'

export const PropertiesPage = () => {
    const {
        data: propertyList = [],
        isLoading,
        isError,
    } = useGetAllPropertiesQuery()

    return (
        <>
            <PropertyHead />
            <PropertySearch
                className={s.search_property}
                isLoading={isLoading}
            />
            <PropertiesSection
                propertyList={propertyList}
                isLoading={isLoading}
                isError={isError}
            />
            <PropertyFormSection />
        </>
    )
}
