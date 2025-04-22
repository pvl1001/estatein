import { FC, useState } from 'react'
import { NavLink } from 'react-router'
import cn from 'classnames'
import { Button } from 'shared/ui/button'
import { Icon } from 'shared/ui/icon'
import { NavListItem } from '../types.ts'
import { Burger } from './Burger/Burger'
import { NavList } from './NavList/NavList'
import s from './Header.module.scss'

type Props = {
    routes: NavListItem[]
}

export const Header: FC<Props> = ({ routes }) => {
    const [isActive, setIsActive] = useState(false)
    const contactRoute: NavListItem = routes[routes.length - 1]
    const navRoutes: NavListItem[] = routes.slice(0, -1)

    return (
        <header className={s._}>
            <div className={cn('wrapper', s.wrapper)}>
                <a href={'/'} className={s.logo}>
                    <Icon.Logo />
                </a>

                <nav className={cn(s.burger_menu, isActive && s._active)}>
                    <NavList
                        routeList={navRoutes}
                        onClick={() => setIsActive(false)}
                    />

                    <NavLink
                        to={contactRoute.path}
                        className={s.contact_button}
                    >
                        <Button onClick={() => setIsActive(false)}>
                            {contactRoute.name}
                        </Button>
                    </NavLink>
                </nav>

                <Burger
                    className={s.burger_button}
                    isActive={isActive}
                    onClick={() => setIsActive(!isActive)}
                />
            </div>
        </header>
    )
}
