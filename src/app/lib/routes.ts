import { NavListItem } from 'widgets/header'
import { Paths } from 'shared/lib/const'

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
