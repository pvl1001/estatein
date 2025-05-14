import { PostProcessorModule } from 'i18next'

export const uppFirstModule: PostProcessorModule = {
    type: 'postProcessor',
    name: 'uppFirst',
    process: (str) => str.toCapitalizeFirst(),
}
