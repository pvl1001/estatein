import { PostProcessorModule, TOptions } from 'i18next'
import { uppFirst } from './uppFirst.ts'

export function uppAll(w: string, _: any, { lng }: TOptions) {
    if (lng === 'ru') {
        return uppFirst(w)
    }
    return w.replace(/^\p{L}|\s\p{L}/gu, (s) => s.toUpperCase())
}

export const uppAllModule: PostProcessorModule = {
    type: 'postProcessor',
    name: 'uppAll',
    process: uppAll,
}
