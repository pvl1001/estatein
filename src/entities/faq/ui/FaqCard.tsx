import { useTranslation } from 'react-i18next'
import { FC } from 'react'
import { Paths } from 'shared/lib/const'
import { Button } from 'shared/ui/button'
import { Text } from 'shared/ui/text'
import s from './FaqCard.module.scss'

type Props = {
    question: string
    answer: string
}

export const FaqCard: FC<Props> = ({ question, answer }) => {
    const { t } = useTranslation()

    return (
        <article className={s._}>
            <Text.Title as={'h5'} className={s.question}>
                {question}?
            </Text.Title>

            <Text.Description className={s.answer}>{answer}.</Text.Description>

            <Button to={Paths.MAIN} className={s.button}>
                {t('common.read_more', { postProcess: 'uppAll' })}
            </Button>
        </article>
    )
}
