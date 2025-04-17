import { FC, useState } from 'react'
import { NavLink } from 'react-router'
import cn from 'classnames'
import Logo from 'shared/assets/svg/logo.svg?react'
import { Button } from 'shared/ui/Button'
import { routes } from '../lib/const'
import { Burger } from './Burger/Burger'
import { NavList } from './NavList/NavList'
import s from './Nav.module.scss'

type Props = {}

export const Nav: FC<Props> = () => {
    const [isActive, setIsActive] = useState(false)

    return (
        <nav className={s._}>
            <div className={cn('wrapper', s.wrapper)}>
                <Logo className={s.logo} />

                <div className={cn(s.burger_menu, isActive && s._active)}>
                    <NavList
                        routeList={routes}
                        onClick={() => setIsActive(false)}
                    />

                    <NavLink to={'/contact'} className={s.contact_button}>
                        <Button onClick={() => setIsActive(false)}>
                            Contact Us
                        </Button>
                    </NavLink>
                </div>

                <Burger
                    className={s.burger_button}
                    isActive={isActive}
                    onClick={() => setIsActive(!isActive)}
                />
            </div>
        </nav>
    )
}
