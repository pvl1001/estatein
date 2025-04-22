import { FC } from 'react'
import { Outlet } from 'react-router'
import { Footer } from 'widgets/footer'
import { Header } from 'widgets/header'
import { routes } from './lib/routes.ts'

type Props = {}

export const Layout: FC<Props> = () => {
    return (
        <>
            <Header routes={routes} />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}
