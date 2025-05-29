import { useTranslation } from 'react-i18next'
import { FC } from 'react'
import { Ns } from 'shared/lib/const'
import { TextBox } from 'shared/ui/text_box'
import s from './PropertyHead.module.scss'

type Props = {}

export const PropertyHead: FC<Props> = () => {
    const { t } = useTranslation([Ns.PROPERTIES_PAGE])
    return (
        <section className={s._}>
            <TextBox
                title={t('section.head.title')}
                description={t('section.head.description')}
            />
        </section>
    )
}
