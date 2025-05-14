import { FC } from 'react'
import { Icon } from 'shared/ui/icon'
import { Text } from 'shared/ui/text'
import { TTeamCard } from '../../../lib/teamCards.ts'
import s from './TeamCard.module.scss'

type Props = Omit<TTeamCard, 'positionKey'> & {
    position: string
}

export const TeamCard: FC<Props> = ({ name, photo, position }) => {
    return (
        <article className={s._}>
            <div className={s.photo_container}>
                <img className={s.photo} src={photo} alt="person photo" />
                <a
                    href="https://twitter.com"
                    target="_blank"
                    className={s.twitter}
                >
                    <Icon.Twitter />
                </a>
            </div>

            <div className={s.text_container}>
                <Text.Title as={'h5'}>{name}</Text.Title>
                <Text.Description>{position}</Text.Description>
            </div>

            <div className={s.say_hello}>
                <span>Say Hello 👋</span>
                <button type={'button'} className={s.say_hello__button}>
                    <Icon.Send />
                </button>
            </div>
        </article>
    )
}
