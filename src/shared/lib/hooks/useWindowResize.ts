import { useLayoutEffect } from 'react'

export function useWindowResize(resize: () => void) {
    useLayoutEffect(() => {
        resize()

        window.addEventListener('resize', resize)

        return () => {
            window.removeEventListener('resize', resize)
        }
    }, [])
}
