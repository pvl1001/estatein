import { EnAboutPage } from 'pages/about'
import { Ns } from 'shared/lib/const'
import { TResources } from '../i18n/config.ts'

declare module 'i18next' {
    interface CustomTypeOptions {
        resources: TResources & {
            [Ns.ABOUT_PAGE]: EnAboutPage
        }
    }
}
