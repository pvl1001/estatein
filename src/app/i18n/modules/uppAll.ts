import { PostProcessorModule } from 'i18next'
import { capitalize } from 'shared/lib/utils'

export const uppAllModule: PostProcessorModule = {
    type: 'postProcessor',
    name: 'uppAll',
    process: capitalize.uppAll,
}
