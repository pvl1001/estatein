import { FC } from 'react'
import cn from 'classnames'
import { Button } from 'shared/ui/button'
import { Skeleton } from 'shared/ui/skeleton'
import { Text } from 'shared/ui/text'
import s from './PropertyCard.module.scss'

type Props = {}

export const PropertyCardSkeleton: FC<Props> = () => {
    return (
        <article className={cn(s._)}>
            <Skeleton>
                <div className={s.image} />
            </Skeleton>

            <div className={s.text_container}>
                <Text.Title as={'h5'}>
                    <Skeleton>
                        <span>Lorem ipsum.</span>
                    </Skeleton>
                </Text.Title>

                <Text.Description>
                    <Skeleton>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Dignissimos eaque impedit.
                        </p>
                    </Skeleton>
                </Text.Description>
            </div>

            <div className={s.footer}>
                <div className={s.price_container}>
                    <Skeleton>
                        <span className={s.price_title}>Price</span>
                    </Skeleton>
                    <Skeleton>
                        <span className={s.price}>123</span>
                    </Skeleton>
                </div>
                <Skeleton>
                    <Button theme={'primary'}>View Property Details</Button>
                </Skeleton>
            </div>
        </article>
    )
}
