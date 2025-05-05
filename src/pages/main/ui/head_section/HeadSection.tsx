import { FC } from 'react'
import cn from 'classnames'
import { Button } from 'shared/ui/button'
import { CounterContainer } from 'shared/ui/counter_container'
import { HeadCard } from 'shared/ui/head_card'
import { Icon } from 'shared/ui/icon'
import { Text } from 'shared/ui/text'
import DiscoverIcon from '../../assets/icons/discover.svg?react'
import cityImg from '../../assets/images/city.webp'
import { countCards } from '../../lib/countCards'
import { headCards } from '../../lib/headCards'
import s from './HeadSection.module.scss'

type Props = {}

export const HeadSection: FC<Props> = ({}) => {
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
                                Discover Your Dream Property with Estatein
                            </Text.Title>
                            <Text.Description>
                                Your journey to finding the perfect property
                                begins here. Explore our listings to find the
                                home that matches your dreams.
                            </Text.Description>
                            <div className={s.discover_icon}>
                                <DiscoverIcon
                                    className={s.discover_icon__round}
                                />
                                <Icon.ArrowLight
                                    className={s.discover_icon__arrow}
                                />
                            </div>
                        </div>

                        <div className={s.buttons}>
                            <Button>Learn More</Button>
                            <Button theme={'primary'}>Browse Properties</Button>
                        </div>

                        <ul className={s.count_list}>
                            {countCards.map((item) => (
                                <li key={item.text}>
                                    <CounterContainer {...item} />
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
