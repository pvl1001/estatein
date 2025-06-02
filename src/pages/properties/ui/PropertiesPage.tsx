import { SearchProperty } from 'features/search_property'
import { PropertiesSection } from './properties_section/PropertiesSection'
import { PropertyHead } from './property_head/PropertyHead.tsx'
import s from './PropertiesPage.module.scss'

export const PropertiesPage = () => {
    return (
        <>
            <PropertyHead />
            <SearchProperty className={s.search_property} />
            <PropertiesSection />
        </>
    )
}
