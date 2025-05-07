import { FC } from 'react'
import { JourneySection } from './journey_section/JourneySection'
import { ValuesSection } from './values_section/ValuesSection'

type Props = {}

export const AboutPage: FC<Props> = () => {
    return (
        <>
            <JourneySection />
            <ValuesSection />
        </>
    )
}
