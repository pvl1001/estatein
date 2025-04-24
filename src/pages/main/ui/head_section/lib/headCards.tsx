import { ReactNode } from 'react'
import HomeIcon from '../icons/home.svg?react'
import InvestmentsIcon from '../icons/investments.svg?react'
import ManagementIcon from '../icons/management.svg?react'
import ValueIcon from '../icons/value.svg?react'

export type THeadCard = {
    icon: ReactNode
    text: string
}

export const headCards: THeadCard[] = [
    {
        icon: <HomeIcon />,
        text: 'Find Your Dream Home',
    },
    {
        icon: <ValueIcon />,
        text: 'Unlock Property Value',
    },
    {
        icon: <ManagementIcon />,
        text: 'Effortless Property Management',
    },
    {
        icon: <InvestmentsIcon />,
        text: 'Smart Investments, Informed Decisions',
    },
]
