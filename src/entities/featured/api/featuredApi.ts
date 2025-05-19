import { baseQuery } from 'shared/api/baseQuery'
import { TFeaturedItem } from '../types'
import { createApi } from '@reduxjs/toolkit/query/react'

export const featuredApi = createApi({
    reducerPath: 'featuredApi',
    baseQuery,
    endpoints: ({ query }) => ({
        getFeatured: query<TFeaturedItem[], void>({
            query: () => '/featureds',
        }),
    }),
})

export const { useGetFeaturedQuery } = featuredApi
