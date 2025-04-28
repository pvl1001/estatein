import { TFeaturedItem } from 'entities/featured_card'
import { request } from 'shared/api/request'
import { featuredsAdapter } from '../adapters/featuredsAdapter.ts'

export const getFeatureds = async (): Promise<TFeaturedItem[]> => {
    try {
        const result = await request<TFeaturedItem[]>('/featureds')
        return featuredsAdapter(result.data)
    } catch (err) {
        console.log(err)
        return []
    }
}
