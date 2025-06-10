import { AxiosError } from 'axios'

function isObject(value: unknown): value is object {
    return value !== null && typeof value === 'object'
}

function isAxiosError(
    value: unknown
): value is AxiosError<{ message: string }> {
    return (
        isObject(value) &&
        'isAxiosError' in value &&
        (value as AxiosError).isAxiosError &&
        'message' in value
    )
}

export function getErrorMessage(error: unknown): string {
    // Обработка случая, когда ошибка — строка
    if (typeof error === 'string') {
        console.log(error)
        return error
    }

    // Обработка AxiosError
    if (isAxiosError(error)) {
        return (
            error.response?.data?.message ??
            error.message ??
            'Axios error without message'
        )
    }

    // Обработка неизвестных ошибок
    console.error('Unknown error encountered:', { error })
    return 'Unknown error'
}
