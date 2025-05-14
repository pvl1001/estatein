import team1 from '../assets/images/team-1.webp'
import team2 from '../assets/images/team-2.webp'
import team3 from '../assets/images/team-3.webp'
import team4 from '../assets/images/team-4.webp'
import { TTeamPositionKeys } from '../i18n/en.ts'

export type TTeamCard = {
    photo: string
    name: string
    positionKey: TTeamPositionKeys
}

export const teamCards: TTeamCard[] = [
    {
        photo: team2,
        name: 'Max Mitchell',
        positionKey: 'founder',
    },
    {
        photo: team3,
        name: 'Sarah Johnson',
        positionKey: 'chief_officer',
    },
    {
        photo: team1,
        name: 'David Brown',
        positionKey: 'property_management',
    },
    {
        photo: team4,
        name: 'Michael Turner',
        positionKey: 'counsel',
    },
]
