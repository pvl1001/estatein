import team1 from '../assets/images/team-1.webp'
import team2 from '../assets/images/team-2.webp'
import team3 from '../assets/images/team-3.webp'
import team4 from '../assets/images/team-4.webp'

export type TTeamCard = {
    photo: string
    name: string
    position: string
}

export const teamCards: TTeamCard[] = [
    {
        photo: team2,
        name: 'Max Mitchell',
        position: 'Founder',
    },
    {
        photo: team3,
        name: 'Sarah Johnson',
        position: 'Chief Real Estate Officer',
    },
    {
        photo: team1,
        name: 'David Brown',
        position: 'Head of Property Management',
    },
    {
        photo: team4,
        name: 'Michael Turner',
        position: 'Legal Counsel',
    },
]
