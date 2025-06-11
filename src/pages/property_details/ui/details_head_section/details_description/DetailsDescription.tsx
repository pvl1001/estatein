import { FC } from 'react'
import cn from 'classnames'
import { TPropertyItem } from 'entities/property'
import { Icon, IconContainer } from 'shared/ui/icon'
import { Text } from 'shared/ui/text'
import s from './DetailsDescription.module.scss'

type Props = Pick<
    TPropertyItem,
    'description' | 'bathroomCount' | 'bedroomCount' | 'size'
> & {
    className?: string
}

export const DetailsDescription: FC<Props> = ({
    description,
    bedroomCount,
    bathroomCount,
    size,
    className,
}) => {
    return (
        <div className={cn(s._, className)}>
            <div className={s.text_container}>
                <Text.Title as="h5">Description</Text.Title>
                <Text.Description>{description}</Text.Description>
            </div>

            <ul className={s.params_list}>
                <li>
                    <Text.Description className={s.icon_text}>
                        <IconContainer>
                            <Icon.Bedroom />
                        </IconContainer>
                        Bedrooms
                    </Text.Description>
                    <p className={s.value}>
                        {String(bedroomCount).padStart(2, '0')}
                    </p>
                </li>
                <li>
                    <Text.Description className={s.icon_text}>
                        <IconContainer>
                            <Icon.Bathroom />
                        </IconContainer>
                        Bathrooms
                    </Text.Description>
                    <p className={s.value}>
                        {String(bathroomCount).padStart(2, '0')}
                    </p>
                </li>
                <li>
                    <Text.Description className={s.icon_text}>
                        <IconContainer>
                            <Icon.Area />
                        </IconContainer>
                        Area
                    </Text.Description>
                    <p className={s.value}>{size.toFeet()} Square Feet</p>
                </li>
            </ul>
        </div>
    )
}
