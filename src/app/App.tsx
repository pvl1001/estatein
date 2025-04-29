import { Provider } from 'react-redux'
import { RouterProvider, createHashRouter } from 'react-router'
import { AboutPage } from 'pages/about'
import { ContactPage } from 'pages/contact'
import { MainPage } from 'pages/main'
import { PropertiesPage } from 'pages/properties'
import { ServicesPage } from 'pages/services'
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
                element: <AboutPage />,
            },
            {
                path: Paths.PROPERTIES,
                element: <PropertiesPage />,
            },
            {
                path: Paths.SERVICES,
                element: <ServicesPage />,
            },
            {
                path: Paths.CONTACT,
                element: <ContactPage />,
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
