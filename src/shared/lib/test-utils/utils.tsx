import { I18nextProvider } from 'react-i18next'
import { ReactNode } from 'react'
import { MemoryRouter } from 'react-router'
import '../utils/globalUtils.ts'
import i18nForTests from './i18nForTest'
import { RenderOptions, render } from '@testing-library/react'

interface TestProviderOptions {
    language?: string
    route?: string
}

const TestWrapper = ({ language = 'en', route = '/' }: TestProviderOptions) => {
    return function Wrapper({ children }: { children: ReactNode }) {
        if (language) {
            void i18nForTests.changeLanguage(language)
        }

        return (
            <MemoryRouter basename={'/'} initialEntries={[route]}>
                <I18nextProvider i18n={i18nForTests}>
                    {children}
                </I18nextProvider>
            </MemoryRouter>
        )
    }
}

const customRender = (
    ui: React.ReactElement,
    options?: Omit<RenderOptions, 'wrapper'> & TestProviderOptions
) => {
    const wrapper = TestWrapper({
        language: options?.language,
        route: options?.route,
    })

    return render(ui, { wrapper, ...options })
}

export * from '@testing-library/react'
export { customRender as render }
