import { useTranslation } from 'react-i18next'
import { FC } from 'react'
import { Button } from '../../../shared/ui/button'
import s from './LanguageSwitch.module.scss'

type Props = {}

export const LanguageSwitch: FC<Props> = () => {
    const { i18n } = useTranslation()

    function toggleLanguage() {
        const lng = i18n.languages.at(-1) ?? 'en'
        void i18n.changeLanguage(lng)
        localStorage.setItem('lng', lng)
    }

    return (
        <Button className={s._} onClick={toggleLanguage}>
            {i18n.language}
        </Button>
    )
}
