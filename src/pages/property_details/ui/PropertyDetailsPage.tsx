import { FC } from 'react'
import { useParams } from 'react-router'
import { Faq } from 'widgets/faq'
import { useGetOnePropertyQuery } from 'entities/property'
import { DetailsHeadSection } from './details_head_section/DetailsHeadSection'

type Props = {}

export const PropertyDetailsPage: FC<Props> = () => {
    const { id } = useParams()
    const { data, isLoading, error } = useGetOnePropertyQuery(id as string)

    if (error) {
        return (
            <div className={'wrapper'}>
                <h1>Error loading data</h1>
            </div>
        )
    }

    return (
        <>
            <DetailsHeadSection isLoading={isLoading} property={data} />
            <Faq />
        </>
    )
}
