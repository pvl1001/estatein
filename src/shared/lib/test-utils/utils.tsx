import { I18nextProvider } from 'react-i18next'
import { Provider } from 'react-redux'
import { ReactNode } from 'react'
import { MemoryRouter } from 'react-router'
import { store } from 'app/lib/store'
import '../utils/globalUtils'
import i18nForTest from './i18nForTest'
import { RenderOptions, render } from '@testing-library/react'

interface TestProviderOptions {
    language?: string
    route?: string
}

const TestWrapper = ({ language = 'en', route = '/' }: TestProviderOptions) => {
    return function Wrapper({ children }: { children: ReactNode }) {
        if (language) {
            void i18nForTest.changeLanguage(language)
        }

        return (
            <Provider store={store}>
                <MemoryRouter initialEntries={[route]}>
                    <I18nextProvider i18n={i18nForTest}>
                        {children}
                    </I18nextProvider>
                </MemoryRouter>
            </Provider>
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
export * from '@testing-library/user-event'
export { i18nForTest }
export { customRender as render }
