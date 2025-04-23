import { FC } from 'react'
import { Outlet } from 'react-router'
import { Footer } from 'widgets/footer'
import { Header } from 'widgets/header'
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
            <Footer links={footerLinks} />
        </>
    )
}
