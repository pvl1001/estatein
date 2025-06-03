import { useForm } from 'react-hook-form'
import { FC } from 'react'
import { useSearchParams } from 'react-router'
import cn from 'classnames'
import { useGetPropertyQuery } from 'entities/property'
import { Button } from 'shared/ui/button'
import { Icon } from 'shared/ui/icon'
import { Option, Select } from 'shared/ui/select'
import { usePropertyOptions } from '../lib/usePropertyOptions'
import s from './SearchProperty.module.scss'

type Props = {
    className?: string
}

export const SearchProperty: FC<Props> = ({ className }) => {
    const [searchParams, setSearchParams] = useSearchParams()
    const { data: properties = [] } = useGetPropertyQuery()
    const options = usePropertyOptions(properties)

    const values = {
        name: searchParams.get('name') || '',
        location: searchParams.get('location') || '',
        type: searchParams.get('type') || '',
        price: searchParams.get('price') || '',
        size: searchParams.get('size') || '',
        year: searchParams.get('year') || '',
    }

    const { register, handleSubmit, setValue } = useForm({ values })

    function onChange(name: keyof typeof values, value: Option['value']) {
        setValue(name, value.toString())
        setSearchParams(
            (prev) => {
                prev.set(name, value.toString())
                return prev
            },
            { preventScrollReset: true }
        )
    }

    function onSubmit(data: typeof values) {
        setSearchParams(
            (prev) => {
                prev.set('name', data.name)
                return prev
            },
            { preventScrollReset: true }
        )
    }

    return (
        <div className={cn(s._, className)}>
            <div className="wrapper">
                <form onSubmit={handleSubmit(onSubmit)}>
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
