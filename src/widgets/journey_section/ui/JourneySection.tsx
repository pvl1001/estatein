import { useTranslation } from 'react-i18next'
import { FC } from 'react'
import cn from 'classnames'
import { Button } from 'shared/ui/button'
import { TextBox } from 'shared/ui/text_box'
import s from './JourneySection.module.scss'

type Props = {}

export const JourneySection: FC<Props> = () => {
    const { t } = useTranslation(['journey'])

    return (
        <div className={s._}>
            <div className={cn('wrapper', s.container)}>
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
