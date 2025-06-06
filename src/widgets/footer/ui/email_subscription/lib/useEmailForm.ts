import { useForm } from 'react-hook-form'
import { useState } from 'react'
import * as yup from 'yup'
import { request } from 'shared/api/request'
import { getErrorMessage, schemas } from 'shared/lib/utils'
import { yupResolver } from '@hookform/resolvers/yup'

const values = {
    email: '',
}

type FormStatus = 'pending' | 'reject' | 'success'

const schema = yup.object({ email: schemas.email })

export const useEmailForm = () => {
    const [message, setMessage] = useState('')
    const [formStatus, setFormStatus] = useState<FormStatus>()
    const {
        reset,
        setError,
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ values, resolver: yupResolver(schema) })

    const onSubmit = handleSubmit(async ({ email }) => {
        try {
            setFormStatus('pending')
            await request.post('emails', { email })
            setFormStatus('success')
            reset()
            setMessage('email.send_success')
            setTimeout(() => setMessage(''), 4000)
        } catch (err: unknown) {
            const message = getErrorMessage(err)
            setFormStatus('reject')
            setError('email', { message })
        }
    })

    return {
        register,
        errors,
        onSubmit,
        message,
        pending: formStatus === 'pending',
    }
}
