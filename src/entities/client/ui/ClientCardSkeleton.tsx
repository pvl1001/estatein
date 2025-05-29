import { Button } from 'shared/ui/button/Button.tsx'
import { Skeleton } from 'shared/ui/skeleton'
import s from './ClientCard.module.scss'

export const ClientCardSkeleton = () => {
    return (
        <article className={s._}>
            <div className={s.header}>
                <div>
                    <Skeleton>
                        <p>Lorem ipsum.</p>
                    </Skeleton>
                    <br />
                    <Skeleton>
                        <p className={s.header__name}>Lorem ipsum dolor</p>
                    </Skeleton>
                </div>
                <Skeleton>
                    <Button className={s.button}>Visit WebSite</Button>
                </Skeleton>
            </div>

            <ul className={s.detail_list}>
                <li className={s.detail}>
                    <Skeleton width={'50%'}>
                        <p className={s.detail__label}>domain</p>
                    </Skeleton>

                    <Skeleton width={'100%'}>
                        <p className={s.detail__value}>{'domain'}</p>
                    </Skeleton>
                </li>

                <li className={s.detail}>
                    <Skeleton width={'50%'}>
                        <p className={s.detail__label}>category</p>
                    </Skeleton>
                    <Skeleton width={'100%'}>
                        <p className={s.detail__value}>{'category'}</p>
                    </Skeleton>
                </li>
            </ul>
            <div className={s.message_container}>
                <Skeleton width={'30%'}>
                    <p>Lorem ipsum dolor.</p>
                </Skeleton>
                <Skeleton>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Dignissimos ea libero magnam optio quis quo.
                        Aliquam blanditiis culpa inventore qui?
                    </p>
                </Skeleton>
            </div>
        </article>
    )
}
