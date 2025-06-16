import { EnAboutPage } from 'pages/about'
import { EnPropertiesPage } from 'pages/properties'
import { EnDetailsPage } from 'pages/property_details'
import { TResources } from 'shared/i18n/config.ts'
import { Ns } from 'shared/lib/const'

declare module 'i18next' {
    interface CustomTypeOptions {
        resources: TResources & {
            [Ns.ABOUT_PAGE]: EnAboutPage
            [Ns.PROPERTIES_PAGE]: EnPropertiesPage
            [Ns.PROPERTY_DETAILS_PAGE]: EnDetailsPage
        }
    }
}
