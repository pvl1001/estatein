import { useEffect, useRef, useState } from 'react'
import { SwiperRef } from 'swiper/react'
import { Swiper } from 'swiper/types'

export const useSlider = (listLength: number) => {
    const swiperRef = useRef<SwiperRef>(null)
    const [activeIndex, setActiveIndex] = useState(() => getActiveIndex(0))

    function getActiveIndex(currentIndex: number) {
        return currentIndex + getCurrentSlidesPerView(swiperRef.current?.swiper)
    }

    function onSlideChange(swiper: Swiper) {
        setActiveIndex(swiper.activeIndex + getCurrentSlidesPerView(swiper))
    }

    function getVisibleSlidesCount(count: number) {
        if (listLength < count) {
            return listLength
        }
        return count
    }

    function getCurrentSlidesPerView(swiper: Swiper | undefined): number {
        if (!swiper) return 0
        const { breakpoints } = swiper.params
        const currentBreakpoint = swiper.getBreakpoint(breakpoints)

        return getVisibleSlidesCount(
            breakpoints?.[currentBreakpoint]
                ? (breakpoints[currentBreakpoint].slidesPerView as number)
                : (swiper.params.slidesPerView as number)
        )
    }

    function slideToFirst() {
        swiperRef.current?.swiper.slideTo(0, 0)
    }

    useEffect(() => {
        swiperRef.current && onSlideChange(swiperRef.current.swiper)
    }, [getCurrentSlidesPerView(swiperRef.current?.swiper)])

    useEffect(() => {
        slideToFirst()
    }, [listLength])

    return {
        onSlideChange,
        activeIndex,
        swiperRef,
    }
}
