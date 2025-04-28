import { RouterProvider, createHashRouter } from 'react-router'
import { AboutPage } from 'pages/about'
import { ContactPage } from 'pages/contact'
import { MainPage } from 'pages/main'
import { PropertiesPage } from 'pages/properties'
import { ServicesPage } from 'pages/services'
import { Paths } from 'shared/lib/const'
import { Layout } from './Layout'

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
    return <RouterProvider router={router} />
}

export default App
