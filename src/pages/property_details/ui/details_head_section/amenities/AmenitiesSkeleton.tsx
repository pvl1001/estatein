import { FC } from 'react'
import { Skeleton } from 'shared/ui/skeleton'
import s from './Amenities.module.scss'

type Props = {}

export const AmenitiesSkeleton: FC<Props> = () => {
    return (
        <div className={s._}>
            <Skeleton>
                <p>Key Features and Amenities</p>
            </Skeleton>

            <ul className={s.features_list}>
                {[1, 2, 3, 4].map((amenity) => (
                    <Skeleton key={amenity}>
                        <li key={amenity}>{amenity}</li>
                    </Skeleton>
                ))}
            </ul>
        </div>
    )
}
