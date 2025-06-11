import { FC } from 'react'
import { Skeleton } from 'shared/ui/skeleton'
import s from './DetailsDescription.module.scss'

type Props = {}

export const DetailsDescriptionSkeleton: FC<Props> = () => {
    return (
        <div className={s._}>
            <div className={s.text_container}>
                <Skeleton>
                    <p>Description</p>
                </Skeleton>
                <Skeleton>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Cumque doloribus enim ex hic libero officiis porro
                        quae qui reiciendis repellendus.
                    </p>
                </Skeleton>
            </div>

            <ul className={s.params_list}>
                {[1, 2, 3].map((el) => (
                    <li key={el}>
                        <Skeleton>
                            <p className={s.icon_text}>Bedrooms</p>
                        </Skeleton>
                        <Skeleton>
                            <p className={s.value}>00</p>
                        </Skeleton>
                    </li>
                ))}
            </ul>
        </div>
    )
}
