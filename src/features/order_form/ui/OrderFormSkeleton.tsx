import { FC } from 'react'
import cn from 'classnames'
import { Button } from 'shared/ui/button'
import { Checkbox } from 'shared/ui/checkbox'
import { Skeleton } from 'shared/ui/skeleton'
import { TextArea } from 'shared/ui/text_area'
import { TextField } from 'shared/ui/text_field'
import s from './OrderForm.module.scss'

type Props = {
    className?: string
}

export const OrderFormSkeleton: FC<Props> = ({ className }) => {
    return (
        <div className={cn(s._, className)}>
            <Skeleton>
                <TextField />
            </Skeleton>
            <Skeleton>
                <TextField />
            </Skeleton>
            <Skeleton>
                <TextField />
            </Skeleton>
            <Skeleton>
                <TextField />
            </Skeleton>
            <Skeleton>
                <TextField />
            </Skeleton>
            <Skeleton>
                <TextField />
            </Skeleton>
            <Skeleton>
                <TextField />
            </Skeleton>
            <Skeleton>
                <TextField />
            </Skeleton>
            <Skeleton>
                <TextField className={s.budget} />
            </Skeleton>
            <fieldset className={s.contact}>
                <Skeleton>
                    <TextField />
                </Skeleton>
                <Skeleton>
                    <TextField />
                </Skeleton>
            </fieldset>

            <Skeleton>
                <TextArea className={s.textarea} />
            </Skeleton>

            <div className={s.submit_container}>
                <Skeleton>
                    <Checkbox
                        message={'Lorem ipsum dolor sit amet, consectetur.'}
                    />
                </Skeleton>
                <Skeleton>
                    <Button theme={'primary'}>Send Your Message</Button>
                </Skeleton>
            </div>
        </div>
    )
}
