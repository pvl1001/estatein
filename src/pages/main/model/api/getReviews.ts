import { ClientReview } from 'entities/client_say_card'
import { request } from 'shared/api/request'
import { reviewsAdapter } from '../adapters/reviewssAdapter'
import { ReviewsResponse } from '../types'

export const getReviews = async (): Promise<ClientReview[]> => {
    try {
        const result = await request<ReviewsResponse[]>('/reviews')
        return reviewsAdapter(result.data)
    } catch (err) {
        console.error(err)
        return []
    }
}
