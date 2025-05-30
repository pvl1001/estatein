import { FC } from 'react'
import { Rating } from 'shared/ui/rating'
import { Text } from 'shared/ui/text'
import { ClientReview } from '../types'
import s from './ReviewCard.module.scss'

export type Props = ClientReview

export const ReviewCard: FC<Props> = ({ rating, title, message, client }) => {
    return (
        <article className={s._}>
            <Rating rating={rating} />

            <div className={s.text_container}>
                <Text.Title as={'h5'} className={s.title}>
                    {title}
                </Text.Title>
                <p>{message}</p>
            </div>

            <div className={s.client}>
                <img
                    className={s.client__avatar}
                    src={client.avatar}
                    alt="avatar"
                />
                <span className={s.client__name}>{client.name}</span>
                <span className={s.client__location}>{client.location}</span>
            </div>
        </article>
    )
}
