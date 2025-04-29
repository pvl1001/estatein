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
    return (
        <article className={s._}>
            <Text.Title as={'h5'} className={s.question}>
                {question}?
            </Text.Title>

            <Text.Description className={s.answer}>{answer}.</Text.Description>

            <Button to={Paths.MAIN} className={s.button}>
                Read More
            </Button>
        </article>
    )
}
