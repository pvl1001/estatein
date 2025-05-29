import { FC, ReactNode } from 'react'
import cn from 'classnames'
import { Paths } from '../../lib/const'
import { Button } from '../button'
import { Slider } from '../slider'
import { SliderConfig } from '../slider/types.ts'
import { TextBox } from '../text_box'
import s from './SectionSlider.module.scss'

type Props = {
    title: string
    description: string
    slideList: ReactNode[]
    skeletonComponent?: ReactNode
    buttonViewAllProps?: {
        to: Paths
        text: string
    }
    isLoading?: boolean
    isError?: boolean
    sliderConfig?: SliderConfig
    className?: string
}

export const SectionSlider: FC<Props> = ({
    slideList,
    title,
    description,
    buttonViewAllProps,
    isError,
    isLoading,
    skeletonComponent,
    sliderConfig,
    className,
}) => {
    const viewAllButton = buttonViewAllProps ? (
        <Button to={buttonViewAllProps.to} theme={'dark'} className={s.button}>
            {buttonViewAllProps.text}
        </Button>
    ) : null
    slideList = isLoading ? Array(3).fill(skeletonComponent) : slideList

    return (
        <section className={cn(s._, className)}>
            <div className={cn('wrapper', s.wrapper)}>
                <div className={s.text_container}>
                    <TextBox
                        withStars
                        className={s.text_box}
                        title={title}
                        description={description}
                    />
                    {viewAllButton}
                </div>

                {isError && 'Error!'}
                <Slider
                    slideList={slideList}
                    viewButton={viewAllButton}
                    config={sliderConfig}
                />
            </div>
        </section>
    )
}
