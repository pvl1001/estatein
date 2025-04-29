import { FC } from 'react'
import { Button } from 'shared/ui/button'
import { Text } from 'shared/ui/text'
import BathroomIcon from '../icons/bathroom.svg?react'
import BedroomIcon from '../icons/bedroom.svg?react'
import VillaIcon from '../icons/villa.svg?react'
import { TFeaturedItem } from '../types'
import s from './FeaturedCard.module.scss'

type Props = TFeaturedItem

export const FeaturedCard: FC<Props> = ({
    img,
    type,
    bathroomCount,
    bedroomCount,
    name,
    price,
    description,
}) => {
    const shortDescription: string = description.slice(0, 70)
    const hasReadMore: boolean = description !== shortDescription

    return (
        <article className={s._}>
            <img src={img} alt="feature" className={s.image} loading={'lazy'} />

            <div className={s.text_container}>
                <Text.Title as={'h5'}>{name}</Text.Title>
                <Text.Description>
                    {shortDescription}
                    {hasReadMore && (
                        <>
                            ...{' '}
                            <a href="/" className={s.read_more}>
                                Read More
                            </a>
                        </>
                    )}
                </Text.Description>
            </div>

            <ul className={s.option_list}>
                {bedroomCount && (
                    <li>
                        <BedroomIcon />
                        {bedroomCount}-bedroom
                    </li>
                )}
                {bathroomCount && (
                    <li>
                        <BathroomIcon />
                        {bathroomCount}-bathroom
                    </li>
                )}
                {type && (
                    <li>
                        <VillaIcon />
                        {type}
                    </li>
                )}
            </ul>

            <div className={s.footer}>
                <div className={s.price_container}>
                    <span className={s.price_title}>Price</span>
                    <span className={s.price}>{price.toCurrency()}</span>
                </div>
                <Button theme={'primary'}>View Property Details</Button>
            </div>
        </article>
    )
}
