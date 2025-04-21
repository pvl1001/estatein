import { NavListItem } from 'widgets/header'

export enum Paths {
    MAIN = '/',
    ABOUT = '/about',
    PROPERTIES = '/properties',
    SERVICES = '/services',
    CONTACT = '/contact',
}

export const routes: NavListItem[] = [
    {
        name: 'Home',
        path: Paths.MAIN,
    },
    {
        name: 'About Us',
        path: Paths.ABOUT,
    },
    {
        name: 'Properties',
        path: Paths.PROPERTIES,
    },
    {
        name: 'Services',
        path: Paths.SERVICES,
    },
    {
        name: 'Contact Us',
        path: Paths.CONTACT,
    },
]
