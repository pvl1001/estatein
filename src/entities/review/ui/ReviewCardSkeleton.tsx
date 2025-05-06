import { Rating } from 'shared/ui/rating'
import { Skeleton } from 'shared/ui/skeleton'
import s from './ReviewCard.module.scss'

export const ReviewCardSkeleton = () => {
    return (
        <article className={s._}>
            <Rating skeleton rating={0} />

            <div className={s.text_container}>
                <Skeleton>
                    <div className={s.title}>Lorem ipsum dolor</div>
                </Skeleton>
                <Skeleton>
                    <div>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Animi architecto assumenda blanditiis consequatur
                        cupiditate dolor, dolore enim eum facilis, fugiat ipsam
                        ipsum nemo nobis nostrum quaerat quidem voluptates!
                        Consectetur, totam?
                    </div>
                </Skeleton>
            </div>

            <div className={s.client}>
                <Skeleton circular>
                    <div className={s.client__avatar} />
                </Skeleton>
                <Skeleton>
                    <span className={s.client__name}>client.name</span>
                </Skeleton>
                <Skeleton>
                    <span className={s.client__location}>client.location</span>
                </Skeleton>
            </div>
        </article>
    )
}
