import { useTranslation } from 'react-i18next'
import { FC } from 'react'
import { Paths } from 'shared/lib/const'
import { Button } from 'shared/ui/button'
import { Icon } from 'shared/ui/icon'
import { Price } from 'shared/ui/price'
import { Text } from 'shared/ui/text'
import { TPropertyItem } from '../types'
import { TruncatedText } from './truncated_text/TruncatedText.tsx'
import s from './PropertyCard.module.scss'

type Props = Pick<
    TPropertyItem,
    'id' | 'img' | 'name' | 'price' | 'description'
> &
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
    id,
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
                            <Icon.Bedroom />
                            {bedroomCount}-bedroom
                        </li>
                    )}
                    {bathroomCount && (
                        <li>
                            <Icon.Bathroom />
                            {bathroomCount}-bathroom
                        </li>
                    )}
                    {type && (
                        <li>
                            <Icon.Villa />
                            {type}
                        </li>
                    )}
                </ul>
            )}

            <div className={s.footer}>
                <Price>{price}</Price>
                <Button theme={'primary'} to={`${Paths.PROPERTIES}/${id}`}>
                    {t('button.view_property_details', {
                        postProcess: 'uppAll',
                    })}
                </Button>
            </div>
        </article>
    )
}
