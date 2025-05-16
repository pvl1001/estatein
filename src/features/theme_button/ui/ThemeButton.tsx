import { FC, memo } from 'react'
import { Button } from '../../../shared/ui/button'
import ThemeAuto from '../assets/icons/theme_auto.svg?react'
import ThemeDark from '../assets/icons/theme_dark.svg?react'
import ThemeLight from '../assets/icons/theme_light.svg?react'
import { useTheme } from '../lib/useTheme.ts'
import s from './ThemeButton.module.scss'

type Props = {}

export const ThemeButton: FC<Props> = memo(() => {
    const { theme, toggleTheme } = useTheme('dark')

    function renderThemeIcon() {
        switch (theme) {
            case 'dark':
                return <ThemeDark />
            case 'light':
                return <ThemeLight />
            default:
                return <ThemeAuto />
        }
    }

    return (
        <Button onClick={toggleTheme} className={s._}>
            {renderThemeIcon()}
        </Button>
    )
})
