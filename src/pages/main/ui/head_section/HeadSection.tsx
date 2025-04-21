import { FC } from 'react'
import { Button } from 'shared/ui/button'
import { Text } from 'shared/ui/text'
import { CountItem } from './CountItem.tsx'
import DiscoverIcon from './icons/discover.svg?react'
import cityImg from './img/city.webp'
import s from './HeadSection.module.scss'

type Props = {
    title: string
    description: string
}

type TCountItem = {
    count: string
    text: string
}

const count_items: TCountItem[] = [
    {
        count: '200+',
        text: 'Happy Customers',
    },
    {
        count: '10k+',
        text: 'Properties For Clients',
    },
    {
        count: '16+',
        text: 'Years of Experience',
    },
]

export const HeadSection: FC<Props> = ({ title, description }) => {
    return (
        <section className={s._}>
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
                        {count_items.map((item) => (
                            <li key={item.text}>
                                <CountItem {...item} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}
