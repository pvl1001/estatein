import { useTranslation } from 'react-i18next'
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
    const { t } = useTranslation()
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
                            placeholder={t('search.placeholder.search', {
                                postProcess: 'uppAll',
                            })}
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
                                {t('search.submit_button', {
                                    postProcess: 'uppAll',
                                })}
                            </span>
                        </Button>
                    </label>

                    <fieldset className={s.fieldset}>
                        <Select
                            icon={<Icon.Location />}
                            placeholder={t('search.placeholder.location', {
                                postProcess: 'uppAll',
                            })}
                            {...register('location')}
                            onChange={(value) => onChange('location', value)}
                            value={values.location}
                            options={options.location}
                        />
                        <Select
                            icon={<Icon.Property />}
                            placeholder={t('search.placeholder.type', {
                                postProcess: 'uppAll',
                            })}
                            {...register('type')}
                            onChange={(value) => onChange('type', value)}
                            value={values.type}
                            options={options.type}
                        />
                        <Select
                            icon={<Icon.Photo />}
                            placeholder={t('search.placeholder.price', {
                                postProcess: 'uppAll',
                            })}
                            {...register('price')}
                            onChange={(value) => onChange('price', value)}
                            value={values.price}
                            options={options.price}
                        />
                        <Select
                            icon={<Icon.Box />}
                            placeholder={t('search.placeholder.size', {
                                postProcess: 'uppAll',
                            })}
                            {...register('size')}
                            onChange={(value) => onChange('size', value)}
                            value={values.size}
                            options={options.size}
                        />
                        <Select
                            icon={<Icon.Datepicker />}
                            placeholder={t('search.placeholder.year', {
                                postProcess: 'uppAll',
                            })}
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
