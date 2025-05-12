import { THeadCard } from 'shared/ui/head_card'
import HomeIcon from '../assets/icons/home.svg?react'
import InvestmentsIcon from '../assets/icons/investments.svg?react'
import ManagementIcon from '../assets/icons/management.svg?react'
import ValueIcon from '../assets/icons/value.svg?react'

export const headCards: THeadCard[] = [
    {
        icon: <HomeIcon />,
        textKey: 'home',
    },
    {
        icon: <ValueIcon />,
        textKey: 'value',
    },
    {
        icon: <ManagementIcon />,
        textKey: 'management',
    },
    {
        icon: <InvestmentsIcon />,
        textKey: 'investments',
    },
]
