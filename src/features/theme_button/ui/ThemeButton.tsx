import { FC, memo } from 'react'
import { TestId } from 'shared/lib/const'
import { Button } from 'shared/ui/button'
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
                return <ThemeDark data-testid={TestId.THEME_DARK} />
            case 'light':
                return <ThemeLight data-testid={TestId.THEME_LIGHT} />
            default:
                return <ThemeAuto data-testid={TestId.THEME_AUTO} />
        }
    }

    return (
        <Button onClick={toggleTheme} className={s._}>
            {renderThemeIcon()}
        </Button>
    )
})
