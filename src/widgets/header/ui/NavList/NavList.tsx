import { useTranslation } from 'react-i18next'
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
    const { t } = useTranslation()
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
                                {t(`nav.${route.name}`, {
                                    postProcess: 'uppAll',
                                })}
                            </Button>
                        )}
                    </NavLink>
                </li>
            ))}
        </ul>
    )
}
