import { FC } from 'react'
import cn from 'classnames'
import { Price } from 'shared/ui/price'
import { Skeleton } from 'shared/ui/skeleton'
import { AmenitiesSkeleton } from './amenities/AmenitiesSkeleton.tsx'
import { DetailsDescriptionSkeleton } from './details_description/DetailsDescriptionSkeleton.tsx'
import s from './DetailsHeadSection.module.scss'

type Props = {}

export const DetailsHeadSectionSkeleton: FC<Props> = () => {
    return (
        <section className={cn(s._, 'wrapper')}>
            <div className={s.head_info}>
                <Skeleton>
                    <h1 className={s.name}>{'Lorem ipsum dolor sit.'}</h1>
                </Skeleton>
                <Skeleton>
                    <div className={s.location}>{'Lorem ipsum dolor sit.'}</div>
                </Skeleton>
                <Skeleton>
                    <Price className={s.price}>{5000}</Price>
                </Skeleton>
            </div>

            <Skeleton>
                <div className={s.image_container} />
            </Skeleton>

            <div className={s.params}>
                <DetailsDescriptionSkeleton />
                <AmenitiesSkeleton />
            </div>
        </section>
    )
}
