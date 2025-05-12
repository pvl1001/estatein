import { useTranslation } from 'react-i18next'
import { FC, useState } from 'react'
import { NavLink } from 'react-router'
import cn from 'classnames'
import { Button } from 'shared/ui/button'
import { LanguageSwitch } from 'shared/ui/language_switch'
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
    const { t } = useTranslation()
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

                    <div className={s.right_container}>
                        <NavLink
                            to={contactRoute.path}
                            className={s.contact_button}
                        >
                            <Button onClick={() => setIsNavActive(false)}>
                                {t(`nav.${contactRoute.name}`, {
                                    postProcess: 'uppAll',
                                })}
                            </Button>
                        </NavLink>
                        <LanguageSwitch />
                    </div>
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
