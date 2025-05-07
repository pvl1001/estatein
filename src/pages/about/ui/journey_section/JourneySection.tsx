import { FC } from 'react'
import cn from 'classnames'
import { countCards } from 'shared/lib/const'
import { CounterList } from 'shared/ui/counter_list'
import { TextBox } from 'shared/ui/text_box'
import houseImg from '../../assets/images/house.webp'
import s from './JourneySection.module.scss'

type Props = {}

export const JourneySection: FC<Props> = () => {
    return (
        <section className={cn(s._, 'wrapper')}>
            <div className={s.text_container}>
                <TextBox
                    withStars
                    title={'Our Journey'}
                    description={
                        "Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary. Over the years, we've expanded our reach, forged valuable partnerships, and gained the trust of countless clients."
                    }
                />
                <CounterList counterList={countCards} />
            </div>
            <div className={s.banner_container}>
                <img src={houseImg} alt="house banner" />
            </div>
        </section>
    )
}
