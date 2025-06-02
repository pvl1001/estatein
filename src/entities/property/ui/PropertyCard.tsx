import { useTranslation } from 'react-i18next'
import { FC } from 'react'
import { Button } from 'shared/ui/button'
import { Text } from 'shared/ui/text'
import BathroomIcon from '../assets/icons/bathroom.svg?react'
import BedroomIcon from '../assets/icons/bedroom.svg?react'
import VillaIcon from '../assets/icons/villa.svg?react'
import { TPropertyItem } from '../types'
import { TruncatedText } from './truncated_text/TruncatedText.tsx'
import s from './PropertyCard.module.scss'

type Props = Pick<TPropertyItem, 'img' | 'name' | 'price' | 'description'> &
    (
        | (Pick<TPropertyItem, 'bathroomCount' | 'bedroomCount' | 'type'> & {
              category?: never
          })
        | (Pick<TPropertyItem, 'category'> & {
              bathroomCount?: never
              bedroomCount?: never
              type?: never
          })
    )

export const PropertyCard: FC<Props> = ({
    img,
    type,
    bathroomCount,
    bedroomCount,
    name,
    price,
    description,
    category,
}) => {
    const { t } = useTranslation()

    return (
        <article className={s._}>
            <img src={img} alt="feature" className={s.image} loading={'lazy'} />

            {category && <p className={s.category}>{category}</p>}

            <div className={s.text_container}>
                <Text.Title as={'h5'}>{name}</Text.Title>
                <Text.Description>
                    <TruncatedText>{description}</TruncatedText>
                </Text.Description>
            </div>

            {(!!bedroomCount || !!bathroomCount || type) && (
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
            )}

            <div className={s.footer}>
                <div className={s.price_container}>
                    <span className={s.price_title}>
                        {t('price', { postProcess: 'uppFirst' })}
                    </span>
                    <span className={s.price}>{price.toCurrency()}</span>
                </div>
                <Button theme={'primary'}>
                    {t('button.view_property_details', {
                        postProcess: 'uppAll',
                    })}
                </Button>
            </div>
        </article>
    )
}
