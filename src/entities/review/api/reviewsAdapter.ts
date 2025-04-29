import { ClientReview, ReviewsResponse } from '../types'

function getRandomInt(max: number): number {
    return Math.floor(Math.random() * max) + 1
}

export const reviewsAdapter = async (
    data: ReviewsResponse[]
): Promise<ClientReview[]> => {
    return await Promise.all(
        data.map(async (el) => {
            const imgModule = await import(
                `../images/profile_${getRandomInt(3)}.webp`
            )
            return {
                rating: el.rating,
                title: el.title,
                message: el.message,
                client: {
                    img: imgModule.default,
                    name: el.name,
                    location: el.country,
                },
            }
        })
    )
}
