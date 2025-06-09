import { ControllerRenderProps, useForm } from 'react-hook-form'
import { ChangeEvent, useState } from 'react'
import * as yup from 'yup'
import { request } from 'shared/api/request.ts'
import { Mask, getErrorMessage, schemas } from 'shared/lib/utils'
import { TextFieldProps } from 'shared/ui/text_field'
import { yupResolver } from '@hookform/resolvers/yup'

const values = {
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    location: '',
    type: '',
    bathrooms: '',
    bedrooms: '',
    budget: '',
    preferred_email: '',
    preferred_phone: '',
    message: '',
    agree: false,
}

export const textFields: (keyof Pick<
    typeof values,
    'firstname' | 'lastname' | 'email' | 'phone'
>)[] = ['firstname', 'lastname', 'email', 'phone']

export const selects: (keyof Pick<
    typeof values,
    'location' | 'type' | 'bathrooms' | 'bedrooms'
>)[] = ['location', 'type', 'bathrooms', 'bedrooms']

const schema = yup.object({
    firstname: schemas.firstname.required('form.errors.required'),
    lastname: schemas.lastname.required('form.errors.required'),
    email: schemas.email.required(),
    phone: schemas.phone.required(),
    location: schemas.location.required('form.errors.required'),
    type: schemas.type.required('form.errors.required'),
    bathrooms: schemas.bathrooms.required('form.errors.required'),
    bedrooms: schemas.bedrooms.required('form.errors.required'),
    budget: schemas.budget.required('form.errors.required'),
    preferred_email: schemas.preferred_email.default(''),
    preferred_phone: schemas.preferred_phone.default(''),
    message: schemas.message.default(''),
    agree: yup
        .boolean()
        .when(
            [
                'firstname',
                'lastname',
                'email',
                'phone',
                'location',
                'type',
                'bathrooms',
                'bedrooms',
                'budget',
            ],
            {
                is: (
                    firstname: string,
                    lastname: string,
                    email: string,
                    phone: string,
                    location: string,
                    type: string,
                    bathrooms: string,
                    bedrooms: string,
                    budget: string
                ) =>
                    !!firstname &&
                    !!lastname &&
                    !!email &&
                    !!phone &&
                    !!location &&
                    !!bathrooms &&
                    !!bedrooms &&
                    !!budget &&
                    !!type,
                then: (schema) =>
                    schema
                        .oneOf([true], 'You must accept the terms')
                        .required('This field is required'),
                otherwise: (schema) => schema,
            }
        )
        .default(false),
})

export const useOrderForm = () => {
    const [isSending, setIsSending] = useState(false)

    const {
        handleSubmit,
        register,
        control,
        formState: { errors },
        reset,
        setError,
    } = useForm<typeof values>({
        defaultValues: values,
        disabled: isSending,
        resolver: yupResolver(schema),
    })

    async function submit({ agree, ...data }: typeof values) {
        console.log(agree)
        try {
            setIsSending(true)
            await request.post('/orders', data)
            reset()
        } catch (err) {
            const message = getErrorMessage(err)
            setError('firstname', { message })
        } finally {
            setIsSending(false)
        }
    }

    function phoneMask({
        name,
        onChange,
    }: ControllerRenderProps<typeof values>):
        | Pick<TextFieldProps, 'onChange' | 'maxLength'>
        | undefined {
        if (/phone/i.test(name)) {
            return {
                onChange: (e: ChangeEvent<HTMLInputElement>) =>
                    onChange(Mask.phone(e.target.value)),
                maxLength: 18,
            }
        }
    }

    return {
        onSubmit: handleSubmit(submit),
        register,
        control,
        errors,
        isSending,
        phoneMask,
    }
}
