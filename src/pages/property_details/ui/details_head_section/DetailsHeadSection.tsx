import { FC } from 'react'
import cn from 'classnames'
import { TPropertyItem } from 'entities/property'
import { Icon } from 'shared/ui/icon'
import { Price } from 'shared/ui/price'
import { DetailsHeadSectionSkeleton } from './DetailsHeadSectionSkeleton.tsx'
import { Amenities } from './amenities/Amenities.tsx'
import { DetailsDescription } from './details_description/DetailsDescription.tsx'
import s from './DetailsHeadSection.module.scss'

type Props = {
    isLoading: boolean
    property?: TPropertyItem
}

export const DetailsHeadSection: FC<Props> = ({ property, isLoading }) => {
    if (isLoading) {
        return <DetailsHeadSectionSkeleton />
    }

    if (!property) {
        return null
    }

    return (
        <section className={cn(s._, 'wrapper')}>
            <div className={s.head_info}>
                <h1 className={s.name}>{property.name}</h1>
                <div className={s.location}>
                    <Icon.Location />
                    {property.location}
                </div>
                <Price className={s.price}>{property.price}</Price>
            </div>

            <div className={s.image_container}>
                <div className={s.img}>
                    <img src={property.img} alt="property photo" />
                </div>
            </div>

            <div className={s.params}>
                <DetailsDescription
                    description={property.description}
                    bathroomCount={property.bathroomCount}
                    bedroomCount={property.bedroomCount}
                    size={property.size}
                />

                <Amenities amenities={property.amenities} />
            </div>
        </section>
    )
}
