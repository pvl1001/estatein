import { SwiperProps } from 'swiper/react'

export type SliderConfig = Omit<SwiperProps, 'spaceBetween'> &
    Partial<{
        spaceBetween: number
        slidesPerView: number
    }>
