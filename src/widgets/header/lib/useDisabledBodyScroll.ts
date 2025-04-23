import { useEffect, useState } from 'react'

export const useDisabledBodyScroll = (isNavActive: boolean) => {
    const [width, setWidth] = useState(0)

    function onResize() {
        setWidth(window.innerWidth)
    }

    useEffect(() => {
        if (isNavActive && width < 576) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = ''
        }
    }, [isNavActive, width])

    useEffect(() => {
        window.addEventListener('resize', onResize)
        return () => window.removeEventListener('resize', onResize)
    }, [])
}
