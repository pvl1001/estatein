import { FC } from 'react'
import { Outlet } from 'react-router'
import { ScrollRestoration } from 'react-router-dom'
import { Footer } from 'widgets/footer'
import { Header } from 'widgets/header'
import { StartJourney } from 'widgets/start_journey'
import IconSprite from 'shared/assets/sprite.svg?react'
import { footerLinks } from './lib/footerLinks'
import { routes } from './lib/routes'

type Props = {}

export const Layout: FC<Props> = () => {
    return (
        <>
            <ScrollRestoration />
            <IconSprite />
            <Header routes={routes} />
            <main>
                <Outlet />
            </main>
            <StartJourney />
            <Footer links={footerLinks} />
        </>
    )
}
