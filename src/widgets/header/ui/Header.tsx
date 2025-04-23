import { FC, useState } from 'react'
import { NavLink } from 'react-router'
import cn from 'classnames'
import { Button } from 'shared/ui/button'
import { Logo } from 'shared/ui/logo'
import { useDisabledBodyScroll } from '../lib/useDisabledBodyScroll'
import { NavListItem } from '../types'
import { Burger } from './Burger/Burger'
import { NavList } from './NavList/NavList'
import s from './Header.module.scss'

type Props = {
    routes: NavListItem[]
}

export const Header: FC<Props> = ({ routes }) => {
    const [isNavActive, setIsNavActive] = useState(false)
    const contactRoute: NavListItem = routes[routes.length - 1]
    const navRoutes: NavListItem[] = routes.slice(0, -1)
    useDisabledBodyScroll(isNavActive)

    return (
        <header className={s._}>
            <div className={cn('wrapper', s.wrapper)}>
                <Logo className={s.logo} />

                <nav className={cn(s.burger_menu, isNavActive && s._active)}>
                    <NavList
                        routeList={navRoutes}
                        onClick={() => setIsNavActive(false)}
                    />

                    <NavLink
                        to={contactRoute.path}
                        className={s.contact_button}
                    >
                        <Button onClick={() => setIsNavActive(false)}>
                            {contactRoute.name}
                        </Button>
                    </NavLink>
                </nav>

                <Burger
                    className={s.burger_button}
                    isActive={isNavActive}
                    onClick={() => setIsNavActive(!isNavActive)}
                />
            </div>
        </header>
    )
}
