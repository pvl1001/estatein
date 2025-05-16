import { useTranslation } from 'react-i18next'
import { FC } from 'react'
import cn from 'classnames'
import { Ns } from 'shared/lib/const'
import { TextBox } from 'shared/ui/text_box'
import { valueCards } from '../../lib/valueCards.tsx'
import { ValuesCardList } from './values_card_list/ValuesCardList.tsx'
import s from './ValuesSection.module.scss'

type Props = {}

export const ValuesSection: FC<Props> = () => {
    const { t } = useTranslation([Ns.ABOUT_PAGE])
    return (
        <section className={cn(s._, 'wrapper')}>
            <TextBox
                withStars
                className={s.text_box}
                title={t('section.values.title', { postProcess: 'uppAll' })}
                description={t('section.values.description')}
            />
            <ValuesCardList cardList={valueCards} />
        </section>
    )
}
