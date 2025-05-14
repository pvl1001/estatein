import { FC } from 'react'
import { AchievementsSection } from './achievements_section/AchievementsSection.tsx'
import { ExperienceSection } from './experience_section/ExperienceSection.tsx'
import { OurJourneySection } from './journey_section/OurJourneySection.tsx'
import { TeamSection } from './team_section/TeamSection.tsx'
import { ValuesSection } from './values_section/ValuesSection'

type Props = {}

export const AboutPage: FC<Props> = () => {
    return (
        <>
            <OurJourneySection />
            <ValuesSection />
            <AchievementsSection />
            <ExperienceSection />
            <TeamSection />
        </>
    )
}
