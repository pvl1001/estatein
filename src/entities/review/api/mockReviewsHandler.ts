import { HttpResponse, http } from 'msw'
import { baseUrl } from 'shared/api/baseQuery'
import { ReviewsResponse } from '../types.ts'

export const mockReviewsHandler = http.get(`${baseUrl}/reviews`, () => {
    return HttpResponse.json<ReviewsResponse[]>([
        {
            id: 'testId',
            name: 'test name',
            avatar: 'test avatar',
            country: 'test country',
            title: 'test title',
            message: 'test message',
            rating: 5,
        },
    ])
})
