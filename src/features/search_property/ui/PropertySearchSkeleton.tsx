import { FC } from 'react'
import cn from 'classnames'
import { Skeleton } from 'shared/ui/skeleton'
import { TextField } from 'shared/ui/text_field'
import s from './PropertySearch.module.scss'

type Props = {
    className?: string
}

export const PropertySearchSkeleton: FC<Props> = ({ className }) => {
    return (
        <div className={cn(s._, className, 'wrapper')}>
            <form className={s.form}>
                <Skeleton>
                    <TextField
                        name={'skeleton'}
                        className={s.search_input}
                        wrapperClassName={s.search_input__wrapper}
                    />
                </Skeleton>

                <fieldset className={s.fieldset}>
                    {Array(5)
                        .fill('')
                        .map((_, i) => (
                            <Skeleton key={i}>
                                <TextField name={'skeleton'} />
                            </Skeleton>
                        ))}
                </fieldset>
            </form>
        </div>
    )
}
