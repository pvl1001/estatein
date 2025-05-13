import { useTranslation } from 'react-i18next'
import { FC } from 'react'
import cn from 'classnames'
import { Button } from 'shared/ui/button'
import { TextBox } from 'shared/ui/text_box'
import s from './Properties.module.scss'

type Props = {}

export const Properties: FC<Props> = () => {
    const { t } = useTranslation()
    return (
        <div className={s._}>
            <div className={cn('wrapper', s.container)}>
                <TextBox
                    title={t('journey_today.title', { postProcess: 'uppAll' })}
                    description={t('journey_today.description')}
                />

                <Button theme={'primary'}>
                    {t('journey_today.button', { postProcess: 'uppAll' })}
                </Button>
            </div>
        </div>
    )
}
