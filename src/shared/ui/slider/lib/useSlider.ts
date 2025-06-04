import { useEffect, useRef, useState } from 'react'
import { useWindowResize } from '../../../lib/hooks'
import { getBreakpoints } from '../../../lib/utils'
import { SwiperRef } from 'swiper/react'

type Props = {
    configPerView: number
    listLength: number
}
export const useSlider = ({ configPerView, listLength }: Props) => {
    const swiperRef = useRef<SwiperRef>(null)
    const { mobile } = getBreakpoints()
    const [slidesPerView, setSlidesPerView] = useState(configPerView ?? 3)
    const [index, setIndex] = useState(slidesPerView)

    function onSlideChange({ activeIndex }: SwiperRef['swiper']) {
        setIndex(activeIndex + slidesPerView)
    }

    function slideToFirst() {
        swiperRef.current?.swiper.slideTo(0, 0)
    }

    function minActiveIndex(n: number): number {
        return Math.min(n, listLength)
    }

    useWindowResize(() => {
        const activeIndex = minActiveIndex(
            window.innerWidth > mobile ? slidesPerView : 1
        )
        setSlidesPerView(activeIndex)
        setIndex(activeIndex)
        slideToFirst()
    })

    useEffect(() => {
        const activeIndex = minActiveIndex(slidesPerView)
        setIndex(activeIndex)
        slideToFirst()
    }, [listLength])

    return {
        slidesPerView,
        activeIndex: index,
        onSlideChange,
        swiperRef,
    }
}
