import { Paths } from 'shared/lib/const'
import { NavListItem } from '../types'

export const routes: NavListItem[] = [
    {
        name: 'home',
        path: Paths.MAIN,
    },
    {
        name: 'about_us',
        path: Paths.ABOUT,
    },
    {
        name: 'properties',
        path: Paths.PROPERTIES,
    },
    {
        name: 'services',
        path: Paths.SERVICES,
    },
    {
        name: 'contact_us',
        path: Paths.CONTACT,
    },
]
