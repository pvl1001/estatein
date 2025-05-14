import { useTranslation } from 'react-i18next'
import { FC } from 'react'
import cn from 'classnames'
import { countCards } from 'shared/lib/const'
import { CounterList } from 'shared/ui/counter_list'
import { TextBox } from 'shared/ui/text_box'
import houseImg from '../../assets/images/house.webp'
import s from './OurJourneySection.module.scss'

type Props = {}

export const OurJourneySection: FC<Props> = () => {
    const { t } = useTranslation(['aboutPage'])
    return (
        <section className={cn(s._, 'wrapper')}>
            <div className={s.text_container}>
                <TextBox
                    withStars
                    title={t('section.head.title', { postProcess: 'uppAll' })}
                    description={t('section.head.description')}
                />
                <CounterList counterList={countCards} />
            </div>
            <div className={s.banner_container}>
                <img src={houseImg} alt="house banner" />
            </div>
        </section>
    )
}
