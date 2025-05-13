import { PostProcessorModule } from 'i18next'

export function uppFirst(w: string) {
    return w.replace(/\p{L}|\p{N}/u, (s) => s.toUpperCase())
}

export const uppFirstModule: PostProcessorModule = {
    type: 'postProcessor',
    name: 'uppFirst',
    process: uppFirst,
}
