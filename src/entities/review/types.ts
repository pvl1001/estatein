export type ClientReview = {
    rating: number
    title: string
    message: string
    client: {
        img: string
        name: string
        location: string
    }
}

export type ReviewsResponse = {
    id: string
    name: string
    country: string
    title: string
    message: string
    rating: number
}
