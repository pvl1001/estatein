import { useCallback, useEffect, useRef, useState } from 'react'
import { getBreakpoints } from '../utils'

/** Адаптировать PX в REM при изменении разрешения экрана */
export function useSliderSpaceBetween(px: number): number {
    const timer = useRef<ReturnType<typeof setTimeout> | null>(null)
    const { mobile, desktop } = getBreakpoints()
    const getPageSize = (): number =>
        window.innerWidth <= mobile ? 390 : desktop
    const getPageRem = (): number => (window.innerWidth / getPageSize()) * px
    const [pageRem, setPageRem] = useState(getPageRem)

    const windowResize = useCallback(() => {
        if (timer.current) {
            clearTimeout(timer.current)
        }
        timer.current = setTimeout(() => setPageRem(getPageRem()), 200)
    }, [])

    useEffect(() => {
        window.addEventListener('resize', windowResize)
        return () => {
            window.removeEventListener('resize', windowResize)
        }
    }, [])

    return pageRem
}
