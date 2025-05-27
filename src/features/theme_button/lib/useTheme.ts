import { useEffect, useState } from 'react'

type Theme = (typeof themes)[number]
const themes = ['auto', 'light', 'dark'] as const

function createGetIndexTheme(index = 0): (c: number) => number {
    return (length: number) => (index + 1 < length ? (index += 1) : (index = 0))
}

export function getCurrentTheme(theme: Theme): Exclude<Theme, 'auto'> {
    if (theme !== 'auto') {
        return theme
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light'
}

export function setThemeAttribute(theme: Theme): void {
    document.documentElement.setAttribute('theme', getCurrentTheme(theme))
}

export const useTheme = (initialTheme: Theme = 'dark') => {
    const storageTheme = localStorage.getItem('theme') ?? initialTheme
    const storageIndexTheme = themes.findIndex((t) => t === storageTheme)
    const [getIndexTheme] = useState(() =>
        createGetIndexTheme(storageIndexTheme)
    )
    const [theme, setTheme] = useState<Theme>(storageTheme as Theme)

    function toggleTheme(): void {
        const count: number = getIndexTheme(themes.length)
        const currentTheme = themes[count]
        setTheme(currentTheme)
    }

    useEffect(() => {
        localStorage.setItem('theme', theme)
        setThemeAttribute(theme)
    }, [theme])

    return { toggleTheme, theme }
}
