import { baseQuery } from 'shared/api/baseQuery'
import { ClientReview } from '../types'
import { reviewsAdapter } from './reviewsAdapter'
import { createApi } from '@reduxjs/toolkit/query/react'

export const reviewApi = createApi({
    reducerPath: 'reviewApi',
    baseQuery,
    endpoints: ({ query }) => ({
        getReviews: query<ClientReview[], void>({
            query: () => '/reviews',
            transformResponse: reviewsAdapter,
        }),
    }),
})

export const { useGetReviewsQuery } = reviewApi
