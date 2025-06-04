import { FC } from 'react'
import cn from 'classnames'
import { Button } from 'shared/ui/button'
import { Select } from 'shared/ui/select'
import { Skeleton } from 'shared/ui/skeleton'
import s from './PropertySearch.module.scss'

type Props = {
    className?: string
}

export const PropertySearchSkeleton: FC<Props> = ({ className }) => {
    return (
        <div className={cn(s._, className)}>
            <div className="wrapper">
                <div>
                    <div className={s.search_input}>
                        <Skeleton>
                            <input name={'skeleton'} />
                        </Skeleton>
                        <Skeleton>
                            <Button className={s.submit_button}>
                                Find Property
                            </Button>
                        </Skeleton>
                    </div>

                    <fieldset className={s.fieldset}>
                        {Array(5)
                            .fill('')
                            .map((_, i) => (
                                <Skeleton key={i}>
                                    <Select options={[]} name={'skeleton'} />
                                </Skeleton>
                            ))}
                    </fieldset>
                </div>
            </div>
        </div>
    )
}
