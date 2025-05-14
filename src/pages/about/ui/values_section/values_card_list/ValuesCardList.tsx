import { useTranslation } from 'react-i18next'
import { FC } from 'react'
import { TCard } from 'shared/lib/types.ts'
import { Card } from 'shared/ui/card'
import { TValueCardKeys } from '../../../i18n/en.ts'
import s from './ValuesCardList.module.scss'

type Props = {
    cardList: TCard<TValueCardKeys>[]
}

export const ValuesCardList: FC<Props> = ({ cardList }) => {
    const { t } = useTranslation(['aboutPage'])

    return (
        <ul className={s._}>
            {cardList.map(({ textKey, icon }) => (
                <li key={textKey}>
                    <Card
                        icon={icon}
                        title={t(`section.values.card.${textKey}.title`, {
                            postProcess: 'uppAll',
                        })}
                        description={t(
                            `section.values.card.${textKey}.description`
                        )}
                    />
                </li>
            ))}
        </ul>
    )
}
