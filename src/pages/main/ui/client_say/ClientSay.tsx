import { FC } from 'react'
import { ClientReview, ClientSayCard } from 'entities/client_say_card'
import { Paths } from 'shared/lib/const'
import { SectionSlider } from 'shared/ui/section_slider'

type Props = {
    reviewList: ClientReview[]
}

export const ClientSay: FC<Props> = ({ reviewList }) => {
    return (
        <SectionSlider
            title={'What Our Clients Say'}
            description={
                'Explore our handpicked selection of featured properties. Each listing offers a glimpse into exceptional homes and investments available through Estatein.'
            }
            slideList={reviewList.map((review) => (
                <ClientSayCard {...review} />
            ))}
            buttonViewAllProps={{
                to: Paths.MAIN,
                name: 'View All Testimonials',
            }}
        />
    )
}
