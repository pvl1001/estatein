import { FC } from 'react'
import { Outlet } from 'react-router'
import { Footer } from 'widgets/footer'
import { Header } from 'widgets/header'
import { Properties } from '../widgets/properties'
import { footerLinks } from './lib/footerLinks'
import { routes } from './lib/routes'

type Props = {}

export const Layout: FC<Props> = () => {
    return (
        <>
            <Header routes={routes} />
            <main>
                <Outlet />
            </main>
            <Properties />
            <Footer links={footerLinks} />
        </>
    )
}
