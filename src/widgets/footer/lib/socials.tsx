import { ReactNode } from 'react'
import { Icon } from 'shared/ui/icon'

export type Social = {
    icon: ReactNode
    link: string
}

export const socials: Social[] = [
    {
        icon: <Icon.Facebook />,
        link: 'https://www.facebook.com/',
    },
    {
        icon: <Icon.LinkedIn />,
        link: 'https://www.linkedin.com/',
    },
    {
        icon: <Icon.Twitter />,
        link: 'https://www.twitter.com/',
    },
    {
        icon: <Icon.YouTube />,
        link: 'https://www.youtube.com/',
    },
]
