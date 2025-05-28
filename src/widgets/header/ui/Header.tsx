import { useTranslation } from 'react-i18next'
import { FC, useState } from 'react'
import { NavLink } from 'react-router'
import cn from 'classnames'
import { LanguageSwitch } from 'features/language_switch'
import { ThemeButton } from 'features/theme_button'
import { Ns } from 'shared/lib/const'
import { Button } from 'shared/ui/button'
import { Logo } from 'shared/ui/logo'
import { routes } from '../lib/routes.ts'
import { useDisabledBodyScroll } from '../lib/useDisabledBodyScroll'
import { NavListItem } from '../types'
import { Burger } from './Burger/Burger'
import { NavList } from './NavList/NavList'
import s from './Header.module.scss'

type Props = {}

export const Header: FC<Props> = ({}) => {
    const { t } = useTranslation([Ns.NAV])
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

                    <div className={s.right_container}>
                        <NavLink
                            to={contactRoute.path}
                            className={s.contact_button}
                        >
                            <Button onClick={() => setIsNavActive(false)}>
                                {t(contactRoute.name, {
                                    postProcess: 'uppAll',
                                })}
                            </Button>
                        </NavLink>
                    </div>
                </nav>
                <div className={s.tools}>
                    <ThemeButton />
                    <LanguageSwitch />
                </div>

                <Burger
                    className={s.burger_button}
                    isActive={isNavActive}
                    onClick={() => setIsNavActive(!isNavActive)}
                />
            </div>
        </header>
    )
}
