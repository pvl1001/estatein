import { TOptions } from 'i18next'

function uppAll(w: string, _?: any, options?: TOptions) {
    if (options?.lng === 'ru') {
        return w.toCapitalizeFirst()
    }
    return w.toCapitalizeAll()
}

export const capitalize = {
    uppAll,
}
