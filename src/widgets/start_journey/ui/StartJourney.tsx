import { useTranslation } from 'react-i18next'
import { FC } from 'react'
import cn from 'classnames'
import { Ns } from 'shared/lib/const'
import { Button } from 'shared/ui/button'
import { TextBox } from 'shared/ui/text_box'
import AbstractLeft from '../assets/icons/abstract_left.svg?react'
import AbstractRight from '../assets/icons/abstract_right.svg?react'
import s from './StartJourney.module.scss'

type Props = {}

export const StartJourney: FC<Props> = () => {
    const { t } = useTranslation([Ns.JOURNEY])

    return (
        <div className={s._}>
            <div className={cn('wrapper', s.container)}>
                <AbstractLeft className={cn(s.abstract, s._left)} />
                <AbstractRight className={cn(s.abstract, s._right)} />
                <TextBox
                    title={t('title', { postProcess: 'uppAll' })}
                    description={t('description')}
                />

                <Button theme={'primary'}>
                    {t('button', { postProcess: 'uppAll' })}
                </Button>
            </div>
        </div>
    )
}
