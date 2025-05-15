import { useTranslation } from 'react-i18next'
import { FC } from 'react'
import cn from 'classnames'
import { Ns, countCards } from 'shared/lib/const'
import { Button } from 'shared/ui/button'
import { CounterList } from 'shared/ui/counter_list'
import { HeadCard } from 'shared/ui/head_card'
import { Icon } from 'shared/ui/icon'
import { Text } from 'shared/ui/text'
import DiscoverIcon from '../../assets/icons/discover.svg?react'
import cityImg from '../../assets/images/city.webp'
import { headCards } from '../../lib/headCards'
import s from './HeadSection.module.scss'

type Props = {}

export const HeadSection: FC<Props> = ({}) => {
    const { t } = useTranslation([Ns.MAIN_PAGE, Ns.TRANSLATION])
    return (
        <section className={s._}>
            <div className={s.top_container}>
                <div className={s.image_container}>
                    <img src={cityImg} alt="city" />

                    <div className={s.discover_icon}>
                        <DiscoverIcon className={s.discover_icon__round} />
                        <Icon.ArrowLight className={s.discover_icon__arrow} />
                    </div>
                </div>

                <div className={'wrapper'}>
                    <div className={s.container}>
                        <div className={s.text_container}>
                            <Text.Title as={'h1'} className={s.title}>
                                {t('section.head.title', {
                                    postProcess: 'uppAll',
                                })}
                            </Text.Title>
                            <Text.Description>
                                {t('section.head.description')}
                            </Text.Description>
                        </div>

                        <div className={s.buttons}>
                            <Button>
                                {t(`${Ns.TRANSLATION}:button.learn_more`)}
                            </Button>
                            <Button theme={'primary'}>
                                {t(
                                    `${Ns.TRANSLATION}:button.browse_properties`
                                )}
                            </Button>
                        </div>

                        <CounterList counterList={countCards} />
                    </div>
                </div>
            </div>

            <div className={cn('wrapper', s.head_card_list_wrapper)}>
                <ul className={s.head_card_list}>
                    {headCards.map((card) => (
                        <li key={card.textKey}>
                            <HeadCard {...card} />
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}
