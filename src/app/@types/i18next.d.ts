import { EnAboutPage } from 'pages/about'
import { TResources } from 'shared/i18n/config.ts'
import { Ns } from 'shared/lib/const'

declare module 'i18next' {
    interface CustomTypeOptions {
        resources: TResources & {
            [Ns.ABOUT_PAGE]: EnAboutPage
        }
    }
}
