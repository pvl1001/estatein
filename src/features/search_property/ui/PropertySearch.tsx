import { FC } from 'react'
import cn from 'classnames'
import { useGetPropertyQuery } from 'entities/property'
import { Button } from 'shared/ui/button'
import { Icon } from 'shared/ui/icon'
import { Select } from 'shared/ui/select'
import { usePropertyOptions } from '../lib/usePropertyOptions'
import { usePropertySearchForm } from '../lib/usePropertySearchForm.ts'
import { PropertySearchSkeleton } from './PropertySearchSkeleton.tsx'
import s from './PropertySearch.module.scss'

type Props = {
    className?: string
    isLoading?: boolean
}

export const PropertySearch: FC<Props> = ({ className, isLoading }) => {
    const { data: properties = [] } = useGetPropertyQuery()
    const options = usePropertyOptions(properties)
    const { values, onChange, register, onSubmit } = usePropertySearchForm()

    if (isLoading) {
        return <PropertySearchSkeleton className={className} />
    }

    return (
        <div className={cn(s._, className)}>
            <div className="wrapper">
                <form onSubmit={onSubmit}>
                    <label className={s.search_input}>
                        <input
                            type="text"
                            autoComplete={'off'}
                            placeholder={'Search For A Property'}
                            {...register('name')}
                        />
                        <Button
                            type={'submit'}
                            theme={'primary'}
                            className={s.submit_button}
                        >
                            <div className={s.submit_button__icon}>
                                <Icon.Find />
                            </div>
                            <span className={s.submit_button__text}>
                                Find Property
                            </span>
                        </Button>
                    </label>

                    <fieldset className={s.fieldset}>
                        <Select
                            icon={<Icon.Location />}
                            placeholder={'Location'}
                            {...register('location')}
                            onChange={(value) => onChange('location', value)}
                            value={values.location}
                            options={options.location}
                        />
                        <Select
                            icon={<Icon.Property />}
                            placeholder={'Property Type'}
                            {...register('type')}
                            onChange={(value) => onChange('type', value)}
                            value={values.type}
                            options={options.type}
                        />
                        <Select
                            icon={<Icon.Photo />}
                            placeholder={'Pricing Range'}
                            {...register('price')}
                            onChange={(value) => onChange('price', value)}
                            value={values.price}
                            options={options.price}
                        />
                        <Select
                            icon={<Icon.Box />}
                            placeholder={'Property Size'}
                            {...register('size')}
                            onChange={(value) => onChange('size', value)}
                            value={values.size}
                            options={options.size}
                        />
                        <Select
                            icon={<Icon.Datepicker />}
                            placeholder={'Build Year'}
                            {...register('year')}
                            onChange={(value) => onChange('year', value)}
                            value={values.year}
                            options={options.year}
                        />
                    </fieldset>
                </form>
            </div>
        </div>
    )
}
