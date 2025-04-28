import { FC, ReactNode } from 'react'
import { Link } from 'react-router'
import cn from 'classnames'
import { Paths } from '../../lib/const'
import { Button } from '../button'
import { Slider } from '../slider'
import { TextBox } from '../text_box'
import s from './SectionSlider.module.scss'

type Props = {
    title: string
    description: string
    slideList: ReactNode[]
    buttonViewAllProps?: {
        to: Paths
        name: string
    }
}

export const SectionSlider: FC<Props> = ({
    slideList,
    title,
    description,
    buttonViewAllProps,
}) => {
    const viewAllButton = buttonViewAllProps ? (
        <Link to={buttonViewAllProps.to} className={s.button}>
            <Button theme={'dark'}>{buttonViewAllProps.name}</Button>
        </Link>
    ) : null

    return (
        <section className={s._}>
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

                <Slider slideList={slideList} viewButton={viewAllButton} />
            </div>
        </section>
    )
}
