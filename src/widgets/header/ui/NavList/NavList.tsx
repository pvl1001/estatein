import { FC } from 'react'
import { NavLink } from 'react-router'
import { Button } from 'shared/ui/button'
import { NavListItem } from '../../types'
import s from './NavList.module.scss'

type Props = {
    routeList: NavListItem[]
    onClick: () => void
}

export const NavList: FC<Props> = ({ routeList, onClick }) => {
    return (
        <ul className={s._}>
            {routeList.map((route) => (
                <li key={route.name}>
                    <NavLink to={route.path}>
                        {({ isActive }) => (
                            <Button
                                onClick={onClick}
                                theme={isActive ? 'default' : 'link'}
                                className={s.button}
                            >
                                {route.name}
                            </Button>
                        )}
                    </NavLink>
                </li>
            ))}
        </ul>
    )
}
