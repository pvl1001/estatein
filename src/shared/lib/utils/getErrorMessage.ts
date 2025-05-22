function isObject(value: unknown): value is object {
    return value !== null && typeof value === 'object'
}

function isError(value: unknown): value is Error {
    return isObject(value) && 'message' in value
}

export function getErrorMessage(error: unknown): string {
    if (typeof error === 'string') {
        return error
    }
    if (isError(error)) {
        return error.message
    }
    console.error(error)
    return 'Unknown error'
}
