import { useTranslation } from 'react-i18next'
import { FC } from 'react'
import {
    ClientCard,
    ClientCardSkeleton,
    useGetClientsQuery,
} from 'entities/client'
import { Ns } from 'shared/lib/const'
import { SectionSlider } from 'shared/ui/section_slider'
import s from './ClientsSection.module.scss'

type Props = {}

export const ClientsSection: FC<Props> = () => {
    const { t } = useTranslation([Ns.ABOUT_PAGE])
    const { data: clients = [], isError, isLoading } = useGetClientsQuery()

    return (
        <SectionSlider
            className={s._}
            isError={isError}
            isLoading={isLoading}
            skeletonComponent={<ClientCardSkeleton />}
            title={t('section.clients.title', { postProcess: 'uppAll' })}
            description={t('section.clients.description')}
            slideList={clients.map((client) => (
                <ClientCard {...client} />
            ))}
            sliderConfig={{
                slidesPerView: 2,
                spaceBetween: 30,
                speed: 1000,
                autoplay: {
                    delay: 7000,
                    disableOnInteraction: false,
                },
            }}
        />
    )
}
