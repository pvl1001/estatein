import { useTranslation } from 'react-i18next'
import { FC, ReactNode } from 'react'
import cn from 'classnames'
import { Paths } from '../../lib/const'
import { Button } from '../button'
import { Slider } from '../slider'
import { SliderConfig } from '../slider/types.ts'
import { Text } from '../text'
import { TextBox } from '../text_box'
import s from './SectionSlider.module.scss'

type Props = {
    title: string
    description: string
    slideList: ReactNode[]
    buttonViewAllProps?: {
        to: Paths
        text: string
    }
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
    sliderConfig,
    className,
}) => {
    const { t } = useTranslation()
    const viewAllButton = buttonViewAllProps ? (
        <Button to={buttonViewAllProps.to} theme={'dark'} className={s.button}>
            {buttonViewAllProps.text}
        </Button>
    ) : null

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
                {slideList.length === 0 && (
                    <Text.Description as={'p'} className={s.slide_list_empty}>
                        {t('not_found', {
                            postProcess: 'uppAll',
                        })}
                    </Text.Description>
                )}
                <Slider
                    slideList={slideList}
                    viewButton={viewAllButton}
                    config={sliderConfig}
                />
            </div>
        </section>
    )
}
