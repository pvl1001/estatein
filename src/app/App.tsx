import { Provider } from 'react-redux'
import { RouterProvider, createHashRouter, useRouteError } from 'react-router'
import { MainPage } from 'pages/main'
import 'shared/i18n/config.ts'
import { Paths } from 'shared/lib/const'
import { getErrorMessage } from 'shared/lib/utils'
import { Layout } from './Layout'
import { store } from './lib/store.ts'

function ErrorPage() {
    const error = useRouteError() as Response
    const message = getErrorMessage(error)
    return (
        <div>
            <h1>ERROR!!!</h1>
            <pre>{message}</pre>
        </div>
    )
}

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
                children: [
                    {
                        index: true,
                        lazy: async () => {
                            const { PropertiesPage } = await import(
                                'pages/properties'
                            )
                            return { Component: PropertiesPage }
                        },
                    },
                    {
                        path: ':id',
                        errorElement: <ErrorPage />,
                        lazy: async () => {
                            const { PropertyDetailsPage } = await import(
                                'pages/property_details'
                            )
                            return { Component: PropertyDetailsPage }
                        },
                    },
                ],
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
