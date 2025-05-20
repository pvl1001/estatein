import { ClientReview, ReviewsResponse } from '../types'

export const reviewsAdapter = async (
    data: ReviewsResponse[]
): Promise<ClientReview[]> => {
    return await Promise.all(
        data.map(async (el) => {
            const result: ClientReview = {
                rating: el.rating,
                title: el.title,
                message: el.message,
                client: {
                    avatar: el.avatar,
                    name: el.name,
                    location: el.country,
                },
            }
            return result
        })
    )
}
