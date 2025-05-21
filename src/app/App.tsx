import { Provider } from 'react-redux'
import { RouterProvider, createBrowserRouter } from 'react-router'
import { MainPage } from 'pages/main'
import { Paths } from 'shared/lib/const'
import { Layout } from './Layout'
import './i18n/config.ts'
import { store } from './lib/store.ts'

const router = createBrowserRouter([
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
