import { FC } from 'react'
import cn from 'classnames'
import { Button } from '../../../shared/ui/button'
import { Text } from '../../../shared/ui/text'
import s from './Properties.module.scss'

type Props = {}

export const Properties: FC<Props> = () => {
    return (
        <div className={s._}>
            <div className={cn('wrapper', s.container)}>
                <div>
                    <Text.Title className={s.title}>
                        Start Your Real Estate Journey Today
                    </Text.Title>
                    <Text.Description>
                        Your dream property is just a click away. Whether you're
                        looking for a new home, a strategic investment, or
                        expert real estate advice, Estatein is here to assist
                        you every step of the way. Take the first step towards
                        your real estate goals and explore our available
                        properties or get in touch with our team for
                        personalized assistance.
                    </Text.Description>
                </div>

                <Button theme={'primary'} className={s.button}>
                    Explore Properties
                </Button>
            </div>
        </div>
    )
}
