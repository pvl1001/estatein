import { FC, ReactNode, useId, useState } from 'react'
import cn from 'classnames'
import { useSliderSpaceBetween } from '../../lib/hooks'
import { useWindowResize } from '../../lib/hooks'
import { getBreakpoints } from '../../lib/utils'
import { Icon } from '../icon'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import s from './Slider.module.scss'

type Props = {
    slideList: ReactNode[]
    viewButton: ReactNode
}

export const Slider: FC<Props> = ({ slideList, viewButton }) => {
    const swiperId: string = useId()
    const pageRem: number = useSliderSpaceBetween(20)
    const { mobile } = getBreakpoints()
    const [slidesPerView, setSlidesPerView] = useState(1)
    const [index, setIndex] = useState(slidesPerView)

    useWindowResize(() => {
        const activeIndex = window.innerWidth > mobile ? 3 : 1
        setSlidesPerView(activeIndex)
        setIndex(activeIndex)
    })

    return (
        <>
            <Swiper
                onSlideChange={({ activeIndex }) => {
                    setIndex(activeIndex + slidesPerView)
                }}
                className={s._}
                spaceBetween={pageRem}
                slidesPerView={slidesPerView}
                modules={[Navigation]}
                navigation={{
                    nextEl: `#${swiperId}.${s._next}`,
                    prevEl: `#${swiperId}.${s._prev}`,
                }}
            >
                {slideList.map((slide, i) => (
                    <SwiperSlide key={i} className={s.slide}>
                        {slide}
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className={cn(s.footer, !viewButton && s._space_between)}>
                {viewButton && (
                    <div className={s.view_button}>{viewButton}</div>
                )}

                <div className={s.counter}>
                    <span className={s.counter__active}>
                        {String(index).padStart(2, '0')}
                    </span>{' '}
                    of {slideList.length}
                </div>

                <button id={swiperId} className={cn(s.nav_button, s._prev)}>
                    <Icon.ArrowStrong />
                </button>
                <button id={swiperId} className={cn(s.nav_button, s._next)}>
                    <Icon.ArrowStrong />
                </button>
            </div>
        </>
    )
}
