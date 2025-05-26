export type ClientReview = {
    rating: number
    title: string
    message: string
    client: {
        avatar: string | undefined
        name: string
        location: string
    }
}

export type ReviewsResponse = {
    id: string
    name: string
    avatar: string
    country: string
    title: string
    message: string
    rating: number
}
