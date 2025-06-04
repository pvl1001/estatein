import { useForm } from 'react-hook-form'
import { useSearchParams } from 'react-router'
import { Option } from 'shared/ui/select'

export const usePropertySearchForm = () => {
    const [searchParams, setSearchParams] = useSearchParams()

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

    function submit(data: typeof values) {
        setSearchParams(
            (prev) => {
                prev.set('name', data.name)
                return prev
            },
            { preventScrollReset: true }
        )
    }

    return {
        register,
        onChange,
        values,
        onSubmit: handleSubmit(submit),
    }
}
