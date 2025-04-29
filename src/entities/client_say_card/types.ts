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
