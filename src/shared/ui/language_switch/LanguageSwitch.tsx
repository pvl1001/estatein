import { useTranslation } from 'react-i18next'
import { FC } from 'react'
import { Button } from '../button'
import s from './LanguageSwitch.module.scss'

type Props = {}

export const LanguageSwitch: FC<Props> = () => {
    const { i18n } = useTranslation()

    function toggleLanguage() {
        void i18n.changeLanguage(i18n.languages.at(-1))
    }

    return (
        <Button className={s._} onClick={toggleLanguage}>
            {i18n.language}
        </Button>
    )
}
