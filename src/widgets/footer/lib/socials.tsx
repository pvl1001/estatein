import { ReactNode } from 'react'
import FacebookIcon from '../ui/copyright/icons/facebook.svg?react'
import LnkedinIcon from '../ui/copyright/icons/linkedin.svg?react'
import TwitterIcon from '../ui/copyright/icons/twitter.svg?react'
import YoutubeIcon from '../ui/copyright/icons/youtube.svg?react'

export type Social = {
    icon: ReactNode
    link: string
}

export const socials: Social[] = [
    {
        icon: <FacebookIcon />,
        link: 'https://www.facebook.com/',
    },
    {
        icon: <LnkedinIcon />,
        link: 'https://www.linkedin.com/',
    },
    {
        icon: <TwitterIcon />,
        link: 'https://www.twitter.com/',
    },
    {
        icon: <YoutubeIcon />,
        link: 'https://www.youtube.com/',
    },
]
