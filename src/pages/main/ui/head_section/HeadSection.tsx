import { FC } from 'react'
import cn from 'classnames'
import { Button } from 'shared/ui/button'
import { Text } from 'shared/ui/text'
import { CountItem } from './CountItem'
import { HeadCard } from './head_card/HeadCard'
import DiscoverIcon from './icons/discover.svg?react'
import cityImg from './img/city.webp'
import { countCards } from './lib/countCards'
import { headCards } from './lib/headCards'
import s from './HeadSection.module.scss'

type Props = {
    title: string
    description: string
}

export const HeadSection: FC<Props> = ({ title, description }) => {
    return (
        <section className={s._}>
            <div className={s.top_container}>
                <div className={s.image_container}>
                    <img src={cityImg} alt="city" />
                </div>

                <div className={'wrapper'}>
                    <div className={s.container}>
                        <div className={s.text_container}>
                            <Text.Title as={'h1'} className={s.title}>
                                {title}
                            </Text.Title>
                            <Text.Description>{description}</Text.Description>
                            <DiscoverIcon className={s.discover_icon} />
                        </div>

                        <div className={s.buttons}>
                            <Button>Learn More</Button>
                            <Button theme={'primary'}>Browse Properties</Button>
                        </div>

                        <ul className={s.count_list}>
                            {countCards.map((item) => (
                                <li key={item.text}>
                                    <CountItem {...item} />
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            <div className={cn('wrapper', s.head_card_list_wrapper)}>
                <ul className={s.head_card_list}>
                    {headCards.map((card) => (
                        <li key={card.text}>
                            <HeadCard {...card} />
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}
