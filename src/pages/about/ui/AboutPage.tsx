import { FC } from 'react'
import { AchievementsSection } from './achievements_section/AchievementsSection.tsx'
import { ExperienceSection } from './experience_section/ExperienceSection.tsx'
import { JourneySection } from './journey_section/JourneySection'
import { ValuesSection } from './values_section/ValuesSection'

type Props = {}

export const AboutPage: FC<Props> = () => {
    return (
        <>
            <JourneySection />
            <ValuesSection />
            <AchievementsSection />
            <ExperienceSection />
        </>
    )
}
