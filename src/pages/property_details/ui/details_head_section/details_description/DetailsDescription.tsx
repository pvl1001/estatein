import { useTranslation } from 'react-i18next'
import { FC } from 'react'
import cn from 'classnames'
import { TPropertyItem } from 'entities/property'
import { Ns } from 'shared/lib/const'
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
    const { t } = useTranslation([Ns.PROPERTY_DETAILS_PAGE, Ns.TRANSLATION])

    return (
        <div className={cn(s._, className)}>
            <div className={s.text_container}>
                <Text.Title as="h5">
                    {t('sections.head.description_container.title', {
                        postProcess: 'uppAll',
                    })}
                </Text.Title>
                <Text.Description>{description}</Text.Description>
            </div>

            <ul className={s.params_list}>
                <li>
                    <Text.Description className={s.icon_text}>
                        <IconContainer>
                            <Icon.Bedroom />
                        </IconContainer>
                        {t(`translation:bedrooms`, { postProcess: 'uppAll' })}
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
                        {t(`translation:bathrooms`, { postProcess: 'uppAll' })}
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
                        {t(`translation:area`, { postProcess: 'uppAll' })}
                    </Text.Description>
                    <p className={s.value}>
                        {size.toFeet()}{' '}
                        {t(`translation:square_feet`, {
                            postProcess: 'uppAll',
                        })}
                    </p>
                </li>
            </ul>
        </div>
    )
}
