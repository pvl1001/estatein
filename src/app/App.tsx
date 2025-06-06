import { Provider } from 'react-redux'
import { RouterProvider, createHashRouter } from 'react-router'
import { MainPage } from 'pages/main'
import 'shared/i18n/config.ts'
import { Paths } from 'shared/lib/const'
import { Layout } from './Layout'
import { store } from './lib/store.ts'

const router = createHashRouter([
    {
        Component: Layout,
        children: [
            {
                path: Paths.MAIN,
                element: <MainPage />,
            },
            {
                path: Paths.ABOUT,
                lazy: async () => {
                    const { AboutPage } = await import('pages/about')
                    return { Component: AboutPage }
                },
            },
            {
                path: Paths.PROPERTIES,
                lazy: async () => {
                    const { PropertiesPage } = await import('pages/properties')
                    return { Component: PropertiesPage }
                },
            },
            {
                path: Paths.SERVICES,
                lazy: async () => {
                    const { ServicesPage } = await import('pages/services')
                    return { Component: ServicesPage }
                },
            },
            {
                path: Paths.CONTACT,
                lazy: async () => {
                    const { ContactPage } = await import('pages/contact')
                    return { Component: ContactPage }
                },
            },
        ],
    },
])

function App() {
    return (
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    )
}

export default App
