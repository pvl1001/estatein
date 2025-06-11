import { FC } from 'react'
import { TPropertyItem } from 'entities/property'
import { Icon, IconContainer } from 'shared/ui/icon'
import { Text } from 'shared/ui/text'
import s from './Amenities.module.scss'

type Props = Pick<TPropertyItem, 'amenities'>

export const Amenities: FC<Props> = ({ amenities }) => {
    return (
        <div className={s._}>
            <Text.Title as={'h5'}>Key Features and Amenities</Text.Title>

            <ul className={s.features_list}>
                {amenities.map((amenity) => (
                    <li key={amenity}>
                        <IconContainer className={s.icon}>
                            <Icon.FlashFill />
                        </IconContainer>
                        <Text.Description>{amenity}</Text.Description>
                    </li>
                ))}
            </ul>
        </div>
    )
}
