import { useTranslation } from 'react-i18next'
import { FC, ReactNode, useEffect, useId, useState } from 'react'
import cn from 'classnames'
import { useSliderSpaceBetween } from '../../lib/hooks'
import { useWindowResize } from '../../lib/hooks'
import { getBreakpoints } from '../../lib/utils'
import { Icon } from '../icon'
import { SliderConfig } from './types.ts'
import { Autoplay, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import s from './Slider.module.scss'

type Props = {
    slideList: ReactNode[]
    viewButton: ReactNode
    config?: SliderConfig
}

export const Slider: FC<Props> = ({ slideList, viewButton, config }) => {
    const { t } = useTranslation()
    const swiperId: string = useId()
    const pageRem: number = useSliderSpaceBetween(config?.spaceBetween ?? 20)
    const { mobile } = getBreakpoints()
    const [slidesPerView, setSlidesPerView] = useState(
        (config?.slidesPerView as number) ?? 3
    )
    const [index, setIndex] = useState(slidesPerView)

    useWindowResize(() => {
        const activeIndex = window.innerWidth > mobile ? slidesPerView : 1
        setSlidesPerView(activeIndex)
        setIndex(activeIndex)
    })

    useEffect(() => {
        const activeIndex =
            window.innerWidth < mobile
                ? 1
                : Math.min(slidesPerView, slideList.length)

        setIndex(activeIndex)
    }, [slideList.length])

    return (
        <>
            <Swiper
                onSlideChange={({ activeIndex }) => {
                    setIndex(activeIndex + slidesPerView)
                }}
                className={s._}
                modules={[Navigation, Autoplay]}
                navigation={{
                    nextEl: `#${swiperId}.${s._next}`,
                    prevEl: `#${swiperId}.${s._prev}`,
                }}
                {...config}
                slidesPerView={slidesPerView}
                spaceBetween={pageRem}
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
                    {t('of')} {String(slideList.length).padStart(2, '0')}
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
