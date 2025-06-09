import { Controller } from 'react-hook-form'
import { Trans, useTranslation } from 'react-i18next'
import { FC } from 'react'
import cn from 'classnames'
import { useGetPropertyQuery } from 'entities/property'
import { Button } from 'shared/ui/button'
import { Checkbox } from 'shared/ui/checkbox'
import { Icon } from 'shared/ui/icon'
import { Select } from 'shared/ui/select'
import { TextArea } from 'shared/ui/text_area'
import { TextField } from 'shared/ui/text_field'
import { usePropertyOptions } from '../../search_property/lib/usePropertyOptions.ts'
import { selects, textFields, useOrderForm } from '../lib/useOrderForm.ts'
import { OrderFormSkeleton } from './OrderFormSkeleton.tsx'
import s from './OrderForm.module.scss'

type Props = {
    className?: string
}

export const OrderForm: FC<Props> = ({ className }) => {
    const { t } = useTranslation()
    const { data: properties = [], isLoading } = useGetPropertyQuery()
    const options = usePropertyOptions(properties)
    const { onSubmit, register, control, errors, isSending, phoneMask } =
        useOrderForm()

    if (isLoading) {
        return <OrderFormSkeleton />
    }

    return (
        <form onSubmit={onSubmit} className={cn(s._, className)}>
            {textFields.map((fieldName) => (
                <Controller
                    key={fieldName}
                    name={fieldName}
                    control={control}
                    render={({ field }) => (
                        <TextField
                            key={fieldName}
                            label={t(`form.fields.${fieldName}.label`, {
                                postProcess: 'uppAll',
                            })}
                            placeholder={t(
                                `form.fields.${fieldName}.placeholder`,
                                {
                                    postProcess: 'uppAll',
                                }
                            )}
                            theme={'grey'}
                            error={t(errors[fieldName]?.message as any, {
                                fieldKey: fieldName,
                            })}
                            {...field}
                            {...phoneMask(field)}
                        />
                    )}
                />
            ))}
            {selects.map((selectName) => (
                <Controller
                    key={selectName}
                    name={selectName}
                    control={control}
                    render={({ field }) => (
                        <Select
                            label={t(`form.fields.${selectName}.label`, {
                                postProcess: 'uppAll',
                            })}
                            placeholder={t(
                                `form.fields.${selectName}.placeholder`,
                                {
                                    postProcess: 'uppAll',
                                }
                            )}
                            theme={'grey'}
                            options={options[selectName]}
                            error={t(errors[selectName]?.message as any, {
                                fieldKey: selectName,
                            })}
                            {...field}
                        />
                    )}
                />
            ))}
            <Controller
                name="budget"
                control={control}
                render={({ field }) => (
                    <Select
                        className={s.budget}
                        label={t(`form.fields.budget.label`, {
                            postProcess: 'uppAll',
                        })}
                        placeholder={t(`form.fields.budget.placeholder`, {
                            postProcess: 'uppAll',
                        })}
                        theme={'grey'}
                        options={options.price}
                        error={t(errors.budget?.message as any, {
                            fieldKey: 'budget',
                        })}
                        {...field}
                    />
                )}
            />
            <fieldset className={s.contact}>
                <label>
                    {t(`form.fields.contact_method.label`, {
                        postProcess: 'uppAll',
                    })}
                </label>
                <Controller
                    name={'preferred_phone'}
                    control={control}
                    render={({ field }) => (
                        <TextField
                            placeholder={t(`form.fields.phone.placeholder`, {
                                postProcess: 'uppAll',
                            })}
                            theme={'grey'}
                            icon={<Icon.Phone />}
                            error={errors.preferred_phone?.message}
                            {...field}
                            {...phoneMask(field)}
                        />
                    )}
                />

                <TextField
                    placeholder={t(`form.fields.email.placeholder`, {
                        postProcess: 'uppAll',
                    })}
                    theme={'grey'}
                    icon={<Icon.Email2 />}
                    error={errors.preferred_email?.message}
                    {...register('preferred_email')}
                />
            </fieldset>

            <TextArea
                className={s.textarea}
                theme={'grey'}
                label={t(`form.fields.message.label`, {
                    postProcess: 'uppAll',
                })}
                placeholder={t(`form.fields.message.placeholder`, {
                    postProcess: 'uppAll',
                })}
                {...register('message')}
            />

            <div className={s.submit_container}>
                <Checkbox
                    message={
                        <Trans
                            i18nKey="form.fields.agree"
                            components={{ Link: <a href={'#'} /> }}
                        ></Trans>
                    }
                    error={!!errors.agree?.message}
                    {...register('agree')}
                />
                <Button theme={'primary'} type={'submit'} isLoading={isSending}>
                    {t('form.button', {
                        postProcess: 'uppAll',
                    })}
                </Button>
            </div>
        </form>
    )
}
