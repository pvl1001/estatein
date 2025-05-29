import { useTranslation } from 'react-i18next'
import { FC } from 'react'
import { Ns } from 'shared/lib/const'
import { Button } from 'shared/ui/button/Button.tsx'
import { Text } from 'shared/ui/text'
import CategoryIcon from '../assets/icons/category.svg?react'
import DomainIcon from '../assets/icons/domain.svg?react'
import { TClient } from '../types.ts'
import s from './ClientCard.module.scss'

export type Props = TClient

export const ClientCard: FC<Props> = ({
    category,
    name,
    url,
    message,
    since,
    domain,
}) => {
    const { t } = useTranslation([Ns.ABOUT_PAGE])
    return (
        <article className={s._}>
            <div className={s.header}>
                <div>
                    <Text.Description>
                        {t('section.clients.card.since')} {since}
                    </Text.Description>
                    <Text.Title as={'h3'} className={s.header__name}>
                        {name}
                    </Text.Title>
                </div>
                <Button to={url} theme={'dark'} className={s.button}>
                    {t('section.clients.card.visit_button')}
                </Button>
            </div>

            <ul className={s.detail_list}>
                <li className={s.detail}>
                    <Text.Description className={s.detail__label}>
                        <DomainIcon /> {t('section.clients.card.domain')}
                    </Text.Description>
                    <p className={s.detail__value}>{domain}</p>
                </li>

                <li className={s.detail}>
                    <Text.Description className={s.detail__label}>
                        <CategoryIcon /> {t('section.clients.card.category')}
                    </Text.Description>
                    <p className={s.detail__value}>{category}</p>
                </li>
            </ul>
            <div className={s.message_container}>
                <Text.Description>
                    {t('section.clients.card.say')} 🤗
                </Text.Description>
                <p>{message}</p>
            </div>
        </article>
    )
}
